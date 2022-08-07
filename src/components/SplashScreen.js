import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {getImageListFromAPI} from '../actions';

class SplashScreen extends Component {
  componentDidMount() {
    this.props.getImageListFromAPI(this.props.navigation);
    // this.props.navigation.navigate('HomeScreen');
  }
  render() {
    const {ViewStyle} = styles;
    return (
      <View style={ViewStyle}>
        <Text style={{fontWeight: 'bold', fontSize: 30, color: 'black'}}>
          Welcome
        </Text>
        <ActivityIndicator size="large" color="red"></ActivityIndicator>
      </View>
    );
  }
}

const mapStatetoProps = state => {
  return {};
};

const styles = StyleSheet.create({
  ViewStyle: {
    backgroundColor: '#8fcbbc',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(mapStatetoProps, {getImageListFromAPI})(SplashScreen);
