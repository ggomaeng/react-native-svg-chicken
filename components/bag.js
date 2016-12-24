/**
 * Created by ggoma on 12/25/16.
 */
import React, {Component} from 'react';
import {
    Animated,
    View,
} from 'react-native';

import Svg, {Path} from 'react-native-svg';
import colors from './colors';

export default class Bag extends Component {
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
            outputRange: ['0deg', '90deg']
        })}]}

    }


    renderBag() {
        return (
            <Svg width='55'
                 height='100'>
                <Path
                    d='M30 0 s-15 0 -25 30 a25 40 0 1 0 50 0 s0 -15 -25 -30'
                    fill='#7E0404'
                />
                <Path
                    d='M25 0 s-15 0 -25 30 a25 40 0 1 0 50 0 s0 -15 -25 -30'
                    fill={colors.bag}
                />


            </Svg>
        )
    }
    render() {
        return (
            <Animated.View style={this.getStyle()}>
                {this.renderBag()}
            </Animated.View>
        )
    }

}