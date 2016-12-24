/**
 * Created by ggoma on 12/24/16.
 */
import React, {Component} from 'react';
import {
    Animated,
    View,
    StyleSheet
} from 'react-native';

import colors from './colors';

import Svg, {
    Circle,
    Path
} from 'react-native-svg';

//<path d="M125,85 a60,60 0 1,0 -115,0" fill="#E79A16" /><!--Top Half-->
// <path d="M10,85 a60,60 0 0,0 115,0" fill="#D78500" /><!--Bottom Half-->

export default class SvgExample extends Component {
    state = {
        posY: new Animated.Value(0)
    };


    componentDidMount() {
        this.blink();
    }

    blink() {
        Animated.sequence([
            Animated.timing(
                this.state.posY,
                {toValue: 10, duration: 300}
            ),

            Animated.delay(100),

            Animated.timing(
                this.state.posY,
                {toValue: 0, duration: 300}
            ),

        ]).start(() => {
            setTimeout(() => this.blink(), 250);
        });

    }

    renderEye() {
        return (
            <Svg
                height="100"
                width="100"
            >
                <Circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke={colors.dark_brown}
                    strokeWidth="1"
                    fill={colors.brown}
                />

                <Circle
                    cx="50"
                    cy="50"
                    r="34"
                    stroke={colors.brown}
                    strokeWidth="3"
                    fill="white"
                />
                <Path
                    d="M85,45 a5.5,5 0 1,0 -70,0"
                    fill={colors.brown}
                    stroke="none"
                />
                <Circle
                    cx="50"
                    cy="55"
                    r="10"
                    stroke='black'
                    strokeWidth="0"
                    fill="black"
                />
            </Svg>
        )

    }

    closedEye() {
        return (
            <Svg
                height="100"
                width="100"

            >
                <Path
                    d="M85,45 a5.5,5 0 1,0 -70,0"
                    fill={colors.brown}
                    stroke="none"
                />
            </Svg>
        )
    }

    getStyle() {
        const {posY} = this.state;
        return {transform:
            [
                {
                    translateY: posY
                }

            ],
            position: 'absolute', top: 0};
    }

    render() {
        return (
            <View>
                <View>
                    {this.renderEye()}
                </View>
                <Animated.View style={this.getStyle()}>
                    {this.closedEye()}
                </Animated.View>
            </View>
        );
    }
}