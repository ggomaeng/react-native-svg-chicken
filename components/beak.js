/**
 * Created by ggoma on 12/25/16.
 */
import React, {Component} from 'react';
import {
    View,
} from 'react-native';

import Svg, {Circle, Path} from 'react-native-svg';
import colors from './colors';

export default class Beak extends Component {
    render() {
        return (
            <View>
                <Svg width='110' height='50'>
                    <Circle
                        cx='85'
                        cy='25'
                        r={20}
                        fill='white'
                    />
                    <Path
                        d='M0 25 a50,20 0 0 1 100 0 Z'
                        stroke='orange'
                        fill={colors.yellow}
                    />
                    <Path
                        d='M100 25 a50 50 0 0 1 -80 0'
                        stroke='orange'
                        strokeWidth={5}
                        fill={colors.yellow}
                    />


                </Svg>
            </View>
        )
    }
}