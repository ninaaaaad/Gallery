import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
//import ListViewScreen from './components/ListViewScreen';
import reducers from '../src/reducers';
import MainAppRoutes from '../src/routes/MainAppRoutes';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <MainAppRoutes />
      </Provider>
    );
  }
}

export default App;
