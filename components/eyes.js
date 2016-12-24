/**
 * Created by ggoma on 12/25/16.
 */
import React from 'react';
import {View} from 'react-native';
import Eye from './eye';

import {eyes} from './scale';

export default () => {
    return (
        <View style={[{flexDirection: 'row', transform: eyes}]}>
            <View>
                <Eye/>
            </View>
            <View style={{position: 'absolute', left: 70}}>
                <Eye/>
            </View>

        </View>
    )

}