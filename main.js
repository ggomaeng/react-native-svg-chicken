import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Eyes from './components/eyes';
import Body from './components/body';
import Wing from './components/wing';
import Beak from './components/beak';
import Bag from './components/bag';
import colors from './components/colors';
import Tail from './components/tail';
import Leg from './components/leg';
import Hair from './components/hair';
import Shadow from './components/shadow';

import {Ionicons} from '@exponent/vector-icons';

import {tail, tail2, whole, beak, bag, leg, leg2, hair, hair2, hair3, hair4} from './components/scale';

class App extends React.Component {
  render() {
    // return (
    //     <View style={styles.container}>
    //
    //     </View>
    // )

    return (
      <View style={styles.container}>
        <Text style={{color: 'white', fontWeight: '800', fontSize: 24}}>react-native-svg-chicken</Text>
        <Text style={{color: 'black', fontWeight: '500'}}>GitHub <Ionicons color='black' size={24}name='logo-github'/> @ggomaeng</Text>
        <View style={{transform: whole}}>
          <View style={{position:'absolute', top: 435, left: 80}}>
            <Shadow/>
          </View>
          <View style={{position:'absolute', transform: tail2, top: 120, left: 170}}>
            <Tail color={colors.dark_red}/>
          </View>
          <View style={{position:'absolute', transform: tail, top: 150, left: 190}}>
            <Tail color={colors.red}/>
          </View>


          <View style={{position:'absolute', transform: leg, top: 315, left: 80}}>
            <Leg color={colors.dark_brown}/>
          </View>

          <View style={{position:'absolute', transform: leg2, top: 315, left: 110}}>
            <Leg color={colors.brown} leg={2}/>
          </View>

          <Body/>




          <View style={{position:'absolute', transform: hair2, top: 8, left:23}}>
            <Hair color={colors.red} stroke={colors.dark_red}/>
          </View>
          <View style={{position:'absolute', transform: hair3, top: 15, left:80}}>
            <Hair stroke={colors.red} color={colors.dark_red}/>
          </View>
          <View style={{position:'absolute', transform: hair4, top: -5, left:50}}>
            <Hair stroke={colors.red} color={colors.dark_red}/>
          </View>
          <View style={{position:'absolute', transform: hair, top: 0, left:70}}>
            <Hair color={colors.red} stroke={colors.dark_red}/>
          </View>


          <View style={{position:'absolute', transform: bag, top: 110, left: 60}}>
            <Bag/>
          </View>
          <View style={{position:'absolute', top: 40, left: 20}}>
            <Eyes />
          </View>
          <View style={{position: 'absolute', top: 250, right: 0}}>
            <Wing/>
          </View>
          <View style={{transform: beak, position: 'absolute', top: 95, left:20}}>
            <Beak/>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

Exponent.registerRootComponent(App);
