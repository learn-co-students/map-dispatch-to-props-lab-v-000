import React, { Component } from 'react';
import RestaurantInput from './components/RestaurantInput';
import Restaurants from './components/Restaurants';

import { connect } from 'react-redux';
import { addRestaurant } from  './actions/restaurants.js';

class App extends Component {
  handleOnClick = event => {
  this.props.addRestaurant()
}

  render() {
    return (
      <div className="App">
      <button onClick={this.handleOnClick}>
      Click
      </button>
        <RestaurantInput />
        <Restaurants />
      </div>
    );
  }
};


export default connect(state => ({ restaurants: state.restaurants }), { addRestaurant })(App);
