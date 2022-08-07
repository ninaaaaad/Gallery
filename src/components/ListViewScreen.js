import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {Listcard, TextField} from './common';
import {connect} from 'react-redux';
import {
  imageSearchBoxValueChanged,
  getImageListFromAPI,
  toggleImageListLoader,
} from '../actions';
import axios from 'axios';

class ListViewScreen extends Component {
  state = {
    imageList: [],
    showLoader: true,
  };
  renderLoader() {
    if (this.state.showLoader) {
     // console.log('loader running');
      return <ActivityIndicator size="large" color="green" />;
    }
  }

  getImagesApiCall() {
    axios
      .get('https://picsum.photos/v2/list')
      .then(response => {
       // console.log('succesfull');
        this.setState({
          imageList: response.data,
        });
      })
      .catch(error => {
      //  console.log(error);
      });
  }
  componentDidMount() {
    //this.getImagesApiCall();
    //this.props.getImageListFromAPI();
  }

  render() {
    const {ViewStyle, TitleStyle} = styles;

    return (
      <View style={ViewStyle}>
        <TextField
          placeholder="🔍"
          onChangeText={value => {
            // console.log("Value of Text Changed to", value);
            this.props.imageSearchBoxValueChanged(this.props.image_list, value);
          }}
          value={this.props.image_search_value}
        />
        <FlatList
          data={this.props.filtered_image_list}
          renderItem={item => {
            // console.log(item, item.item, item.item.owner);
            return (
              <Listcard
                image={item.item.download_url}
                ownerName={item.item.author}
                detailsOnPress={() => {
                  this.props.navigation.navigate('Details', {
                    image_id: item.item.id,
                    author: item.item.author,
                    width: item.item.width,
                    height: item.item.height,
                  });
                }}
              />
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewStyle: {
    backgroundColor: '#8fcbbc',
    flex: 1,
  },
  TitleStyle: {
    margin: 1,
    backgroundColor: '#3EB489',
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    borderWidth: 2,
    //borderRadius: 20,
  },
});

const mapStatetoProps = state => {
  return {
    image_search_value: state.imageListing.image_search,
    image_list: state.imageListing.image_list,
    showLoader: state.imageListing.showLoader,
    filtered_image_list: state.imageListing.filtered_image_list,
  };
};

export default connect(mapStatetoProps, {
  imageSearchBoxValueChanged,
  getImageListFromAPI,
  toggleImageListLoader,
})(ListViewScreen);
