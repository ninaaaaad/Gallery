import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Tab2Screen2 extends Component {
  render() {
    const {ViewStyle} = styles;
    return (
      <View style={ViewStyle}>
        <Text>This is Tab2Screen2.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewStyle: {
    alignItems: 'center',
    //justifyContent: 'centre',
  },
});

export default Tab2Screen2;
