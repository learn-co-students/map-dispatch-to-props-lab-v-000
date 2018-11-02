import React, { Component } from 'react';
import RestaurantInput from './components/RestaurantInput';
import Restaurants from './components/Restaurants';
import { connect } from 'react-redux';
import { addRestaurant } from './actions/restaurants'
import { bindActionCreators } from 'redux';

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


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addRestaurant: addRestaurant
  },dispatch)
}


export default connect(mapDispatchToProps)(App);
