import React, { Component } from 'react';
import { ConnectedRestaurantInput } from './components/RestaurantInput';
import { ConnectedRestaurants } from './components/Restaurants';
import { connect } from 'react-redux';
import { addRestaurant } from  './actions/restaurants';
import { bindActionCreators } from 'redux';


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

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addRestaurant: addRestaurant
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
