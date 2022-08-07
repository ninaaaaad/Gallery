import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

class NextScreen extends Component {
  componentDidMount() {
    //console.log(this.props.route);
  }
  render() {
    const {ViewStyle} = styles;
    return (
      <View style={ViewStyle}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          This is a new Screen.
        </Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}>
          <Text>Go Back to Gallery</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ViewStyle: {
    alignItems: 'center',
    marginVertical: 100,
    //borderWidth: 4,
    //backgroundColor: 'pink',
    flex: 0.4,
  },
});

export default NextScreen;
