import {
  IMAGE_SEARCH_BOX_UPDATED,
  UPDATE_IMAGE_LIST,
  TOGGLE_IMAGELIST_LOADER,
  FILTERED_IMAGE_LIST
} from './ActionTypes';
import axios from 'axios';

export const imageSearchBoxValueChanged = (image_list, search) => {
 // return {
  //  type: IMAGE_SEARCH_BOX_UPDATED,
  //  payload: search,
 // };
  return dispatch => {
    var filtered_image_list = image_list.filter(function (image_data) {
      return image_data.author.includes(search, 0);
    });
    console.log('filtered list:', filtered_image_list);
    dispatch({
      type: IMAGE_SEARCH_BOX_UPDATED,
      payload: search,
    });
    dispatch({
      type: FILTERED_IMAGE_LIST,
      payload: filtered_image_list,
    });
  };
};

export const toggleImagelistLoader = show => {
  console.log('in toggle');
  return {
    type: TOGGLE_IMAGELIST_LOADER,
    payload: show,
  };
};

export const getImageListFromAPI = nav => {
  //console.log('in get image api');
  return dispatch => {
    axios
      .get('https://picsum.photos/v2/list')
      .then(response => {
        //console.log(response.data);
        dispatch({
          type: UPDATE_IMAGE_LIST,
          payload: response.data,
        });
        dispatch({
          type: FILTERED_IMAGE_LIST,
          payload: response.data,
        });
        //console.log(nav);
        nav.navigate('HomeScreen');
      })
      .catch(error => {
        console.log(error);
      });
  };
};
