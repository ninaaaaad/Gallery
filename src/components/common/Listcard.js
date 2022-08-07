/* eslint-disable prettier/prettier */
import React ,{ Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  Alert,
} from 'react-native';
//import ListViewScreen from '../ListViewScreen';

class Listcard extends Component{
  render() {
    const {Button1View, ViewStyle, Button2View, ImageStyle} = styles;
    const {image, ownerName, detailsOnPress} = this.props;
    return (
      <View style={ViewStyle}>
        <View>
          <Image style={ImageStyle} source={{uri: image}} />
          <View style={Button1View}>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
              {ownerName}
            </Text>
          </View>
        </View>
        <View >
          <TouchableOpacity style={Button2View}
            // onPress={()=>{
            // Alert.alert('Details Button was Pressed')
            // }}
          onPress ={detailsOnPress}
          >
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
              View Details.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   
    ViewStyle: {
        backgroundColor: 'lightgrey',
       //height: '35%',
       padding: 2,
       borderRadius: 30,
       borderWidth: 4,
       marginVertical: 10,
       marginHorizontal: 15,
    },
     Button1View : {
        margin: 3,
        padding : 10,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        borderRadius: 20,
        borderWidth: 3,
        shadowColor: 'black',
     },
     ImageStyle:{

         padding: 10,
       // width: '97.5%',
        height: 350,
        margin: 5,
        borderRadius: 20,
        borderWidth: 10,
     },
     Button2View : {
        margin: 3,
        padding : 10,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 20,
        borderWidth: 3,
        shadowColor: 'black',
     },
})

export {Listcard};
