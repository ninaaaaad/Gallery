import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

class ImageDetailScreen extends Component {
  componentDidMount() {
    //  console.log(this.props.route);
  }
  render() {
    const {ViewStyle, ButtonStyle} = styles;
    return (
      <View style={ViewStyle}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          Image id: {this.props.route.params.image_id}
        </Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          Image Owner: {this.props.route.params.author}
        </Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          Image Width: {this.props.route.params.width}
        </Text>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          Image Height: {this.props.route.params.height}
        </Text>
        <View style={ButtonStyle}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Go Back to Gallery
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ViewStyle: {
    alignItems: 'center',
    margin: 3,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    flex: 1,
   // borderWidth: 4,
  },
  ButtonStyle: {
    backgroundColor: 'red',
    borderWidth: 3,
    borderRadius: 30,
    width: '97%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 100,
    height: 50,
    shadowColor: 'black',
  },
});

export default ImageDetailScreen;
