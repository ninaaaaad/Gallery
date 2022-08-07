import React, {Component} from 'react';
import {TextInput} from 'react-native';

class TextField extends Component {
  render() {
    const {placeholder, onChangeText, style, value} = this.props;
    const {textFieldStyle} = styles;
    return <TextInput
         placeholder={placeholder}
         style={[textFieldStyle,style]}
         onChangeText={onChangeText}
         value={value}
         placeholderTextColor = "grey" />;
  }
}
const styles = {
  textFieldStyle: {
    width: '90%',
    height: 40,
   // borderRadius: 30,
    borderBottomWidth: 4,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 5,
    backgroundColor: 'off-white',
    color: 'black',
    
},
};

export {TextField};
