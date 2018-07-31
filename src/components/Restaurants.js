import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Restaurants extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.restaurants.map(
            (rest, index) => <li key={index}>{rest.name}: {rest.location}</li>
          )}
        </ul>
      </div>
    );
  }
};

export const ConnectedRestaurants = connect(
  state => ({restaurants: state.restaurants})
)(Restaurants);
