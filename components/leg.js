/**
 * Created by ggoma on 12/25/16.
 */
import React, {Component} from 'react';
import {
    Animated,
    View
} from 'react-native';

import Svg, {Path, Circle} from 'react-native-svg';
import colors from './colors';

export default class Leg extends Component {
    state = {
        rotation: new Animated.Value(0)
    };

    componentDidMount() {
        const {leg} = this.props;
        if(leg == 2) {
            setTimeout(() => this.rotate(), 400);
        } else {
            this.rotate();
        }

    }

    rotate() {
        const duration = 400;
        Animated.sequence([
            Animated.timing(
                this.state.rotation,
                {toValue: .5, duration}
            ),
            Animated.timing(
                this.state.rotation,
                {toValue: -.5, duration}
            )
        ]).start(() => this.rotate());
    }

    getStyle() {
        const {rotation} = this.state;
        return {transform: [{rotate: rotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg']
        })}]}

    }


    renderLeg() {
        const{color} = this.props;
        return (
            <Svg width='100' height='150'>
                <Path
                    d='M55 65 s-5 10 -5 50'
                    stroke={colors.yellow}
                    fill='none'
                    strokeWidth={9}
                />

                <Circle
                    cx='50'
                    cy='50'
                    r='30'
                    fill={color}
                />

                <Path
                    d='M55 115 H 20'
                    stroke={colors.yellow}
                    strokeWidth={5}
                />
            </Svg>
        )
    }

    render() {
        return (
            <Animated.View style={[this.getStyle()]}>
                {this.renderLeg()}
            </Animated.View>
        )
    }
}