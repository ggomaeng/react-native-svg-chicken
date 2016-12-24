/**
 * Created by ggoma on 12/25/16.
 */
import React, {Component} from 'react';
import {Animated, View} from 'react-native';

export default class Shadow extends Component {
    state = {
        size: new Animated.Value(0)
    };

    componentDidMount() {
        this.wobble();
    }

    wobble() {
        const duration = 400;
        Animated.sequence([
            Animated.timing(
                this.state.size,
                {toValue: .5, duration}
            ),
            Animated.timing(
                this.state.size,
                {toValue: -.5, duration}
            )
        ]).start(() => this.wobble());
    }

    getStyle() {
        const {size} = this.state;
        return {
            width: size.interpolate({
                inputRange:[0, 1],
                outputRange:[150, 200]
            }),
            height: 10, backgroundColor: 'rgba(0,0,0,.3)',


        }

    }

    render() {
        return (
            <Animated.View style={this.getStyle()}>

            </Animated.View>
        )
    }
}