import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

class Tab2Screen1 extends Component {
  render() {
    const {ViewStyle, ScreenStyle, ButtonStyle} = styles;
    return (
      <View style={ScreenStyle}>
        <View style={ViewStyle}>
          {/* <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
            About This App
          </Text> */}
          
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              margin: 10,
            }}>
            Visual Studio Code comes with Emmet preinstalled. Emmet is a plugin
            that helps you write HTML and CSS easier using shortcuts. Thanks to
            Emmet it is really easy to generate lorem ipsum. You no longer have
            to search for a lorem ipsum online generator.
            Visual Studio Code comes with Emmet preinstalled. Emmet is a plugin
            that helps you write HTML and CSS easier using shortcuts. Thanks to
            Emmet it is really easy to generate lorem ipsum. You no longer have
            to search for a lorem ipsum online generator.
            Visual Studio Code comes with Emmet preinstalled. Emmet is a plugin
            that helps you write HTML and CSS easier using shortcuts. Thanks to
            Emmet it is really easy to generate lorem ipsum. You no longer have
            to search for a lorem ipsum online generator.
            Visual Studio Code comes with Emmet preinstalled. Emmet is a plugin
            that helps you write HTML and CSS easier using shortcuts. Thanks to
            Emmet it is really easy to generate lorem ipsum. You no longer have
            to search for a lorem ipsum online generator.
            generator. Visual Studio Code comes with Emmet preinstalled. Emmet
            is a plugin that helps you write HTML and CSS easier using
            shortcuts. Thanks to Emmet it is really easy to generate lorem
            ipsum. You no longer have to search for a lorem ipsum online
            Visual Studio Code comes with Emmet preinstalled. Emmet is a plugin
            plugin that helps you write HTML and CSS easier using shortcuts.
            shortcuts. Thanks to Emmet it is really easy to generate lorem
            lorem ipsum. You no longer have to search for a lorem ipsum online
            online online online online online online generator.
            Visual Studio Code comes with Emmet preinstalled.
          </Text>
         <View style={ButtonStyle}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Contact Us');
            }}>
            <Text style={{fontSize: 30, color: 'black'}}>
              📲
            </Text>
          </TouchableOpacity>
        </View>
         
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewStyle: {
    backgroundColor: '#3EB489',
    //height: '35%',
    padding: 2,
    borderRadius: 30,
    borderWidth: 3,
    margin: 3,
   // marginHorizontal: 2,
  },
  ScreenStyle: {
    backgroundColor: 'white',
    //flex: 1,
    borderRadius: 30,
   // borderWidth: 3,
    margin: 5,
  },
  ButtonStyle: {
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 30,
    borderWidth: 3,
    margin: 6,
  },
});

export default Tab2Screen1;
