/**
 * Created by ggoma on 12/25/16.
 */
import React, {Component} from 'react';
import {Animated, View} from 'react-native';

import Svg, {Path} from 'react-native-svg';
import colors from './colors';

export default class Hair extends Component {
    state = {
        rotation: new Animated.Value(0)
    };

    componentDidMount() {
        const {color} = this.props;
        if(color == colors.dark_red ) {
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
                {toValue: .1, duration}
            ),
            Animated.timing(
                this.state.rotation,
                {toValue: -.1, duration}
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
    renderHair() {
        const {color, stroke} = this.props;
        return (
            <Svg width='110' height='60'>
                <Path
                    d='M0 0 s100 0 100 50 H0 0 Z'
                    stroke={stroke}
                    strokeWidth={3}
                    fill={color}
                />
            </Svg>
        )
    }
    render() {
        return (
            <Animated.View style={this.getStyle()}>
                {this.renderHair()}
            </Animated.View>
        )
    }
}