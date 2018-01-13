import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addRestaurant} from './actions/restaurants'
import { ConnectedRestaurantInput } from './components/RestaurantInput';
import { ConnectedRestaurants } from './components/Restaurants';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedRestaurantInput />
        <ConnectedRestaurants />
      </div>
    );
  }
};



export default App;
