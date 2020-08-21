// Redux is already set up through index.js and the reducer manageRestaurants. 
// Write a mapDispatchToProps() function that allows you to pass dispatched actions as props.


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import manageRestaurants from './reducers/manageRestaurants';

const store = createStore(manageRestaurants, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
