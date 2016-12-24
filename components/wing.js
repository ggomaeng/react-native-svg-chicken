/**
 * Created by ggoma on 12/25/16.
 */
import React, {Component} from 'react';
import {
    Animated,
    View,
    Text,
    StyleSheet
} from 'react-native';

import Svg, {Path} from 'react-native-svg';
import colors from './colors';

export default class Wing extends Component {
    state = {
        rotation: new Animated.Value(0)
    };

    componentDidMount() {
        this.rotate();
    }

    rotate() {
        const duration = 400;
        Animated.sequence([
            Animated.timing(
                this.state.rotation,
                {toValue: .2, duration}
            ),
            Animated.timing(
                this.state.rotation,
                {toValue: 0, duration}
            )
        ]).start(() => this.rotate());
    }


    renderWing() {
        return (
            <Svg width='200' height='100'>
                <Path
                    d='M 50 0 h150 s0 100 -150 100 a25,25 0 0,1 0 -100'
                    stroke='none'
                    fill={colors.brown}

                />
            </Svg>
        )
    }

    getStyle() {
        const {rotation} = this.state;
        return {transform: [{rotate: rotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '90deg']
        })}]}

    }

    render() {
        return (
            <Animated.View style={this.getStyle()}>
                {this.renderWing()}
            </Animated.View>
        )
    }
}