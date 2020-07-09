import React, { Component } from 'react';
import { connect } from 'react-redux';
import RestaurantInput from './components/RestaurantInput';
import Restaurants from './components/Restaurants';
import { addRestaurant } from  './actions/restaurants';

export class App extends Component {
  
  handleOnClick = event => {
    this.props.addRestaurant()
  }

  render() {
    return (
      <div className="App">
        <RestaurantInput />
        <Restaurants />
      </div>
    );
  }
};

export default connect(state => ({ restaurants: state.restaurants }), { addRestaurant })(App);
