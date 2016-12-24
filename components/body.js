/**
 * Created by ggoma on 12/25/16.
 */
import React, {Component} from 'react';
import {
    View
} from 'react-native';

import Svg, {Path} from 'react-native-svg';
import colors from './colors';

export default class Body extends Component {
    renderBase() {
        return (
            <Svg width='300' height='400'>
                <Path
                    d="M150 70 v170 h140 A50,50 0, 0,1 30,270 S20,200 80,130 v-60 A30,30 0 0,1 150,70"
                    fill={colors.light_brown}
                    stroke="none"
                />
            </Svg>
        )
    }

    colorBase() {
        return (
            <Svg width='300' height='400'>
                <Path
                    d="M150 70 v130 l -20 -20 l -20 20 l -20 -20 l -20 20 l -20 -20 l -3 3  S48,170 80,130 v-60 A30,30 0 0,1 150,70"
                    fill={colors.brown}
                    stroke="none"
                />
                <Path
                    d="M49, 180 l 20 20 l 20 -20 l 20 20 l 20 -20 l 15 20 l 3 -3"
                    fill='none'
                    strokeWidth="7"
                    stroke={colors.dark_brown}
                />
            </Svg>

        )
    }

    render() {
        return (
            <View>
                <View>
                    {this.renderBase()}
                </View>

                <View style={{position: 'absolute', top: 0}}>
                    {this.colorBase()}
                </View>

            </View>
        )
    }
}