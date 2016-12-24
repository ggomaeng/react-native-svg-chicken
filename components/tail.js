/**
 * Created by ggoma on 12/25/16.
 */
import React, {Component} from 'react';
import {
    Animated,
    View
} from 'react-native';

import Svg, {Path} from 'react-native-svg';

export default class Tail extends Component {
    state = {
        rotation: new Animated.Value(0)
    };

    componentDidMount() {
        this.jiggle();
    }

    jiggle() {
        Animated.sequence([
            Animated.timing(
                this.state.rotation,
                {toValue: .1, duration: 400}
            ),
            Animated.timing(
                this.state.rotation,
                {toValue: 0, duration: 400}
            )
        ]).start(() => this.jiggle());


    }

    renderTail() {
        const {color} = this.props;
        return (
            <Svg height='200' width='200'>
                <Path
                    d='M0 100 a50 50 0 0 1 200 0'
                    stroke='none'
                    fill={color}
                />
            </Svg>
        )
    }

    getStyle() {
        const {rotation} = this.state;
        return {transform: [
            {
                rotate: rotation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '90deg']
                })
            }
        ]}

    }

    render() {
        return (
            <Animated.View style={this.getStyle()}>
                {this.renderTail()}
            </Animated.View>
        )
    }
}