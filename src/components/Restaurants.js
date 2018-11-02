import React, { Component } from 'react';
import { connect } from 'react-redux';

class Restaurants extends Component {

  render() {
    debugger
    let restaurants = this.props.restaurants.map((restaurant, index) => <li key={index}>name: {restaurant.name}, location: {restaurant.location}</li>);

    return (
      <div>
        <ul>
          {restaurants}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { restaurants: state.restaurants }
}

export default connect(mapStateToProps)(Restaurants);
