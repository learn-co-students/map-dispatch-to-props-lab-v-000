import React, { Component } from 'react';
import RestaurantInput from './components/RestaurantInput';
import Restaurants from './components/Restaurants';
import { connect } from 'react-redux';
import { addRestaurant } from './actions/restaurants';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <RestaurantInput />
        <Restaurants />
      </div>
    );
  }
};

export default connect(state => ({ restaurants: state.restaurants }), {addRestaurant})(App);
