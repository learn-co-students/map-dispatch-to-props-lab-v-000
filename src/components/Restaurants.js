import React, { Component } from 'react';
import { connect } from 'react-redux';
//import manageRestaurants from '../reducers/manageRestaurants';

class Restaurants extends Component {

  render() {

    // We map state to 'restaurants' down below, which means that here we can reference it as this.props.restuarants
    // which we map over, creating a list item for each restaurant object in the restaurants array.
    let restaurants = this.props.restaurants.map((restaurant, index) => <li key={index}>{restaurant.name}</li>);

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

// We don't need to explicitly map dispatch to props
export default connect(mapStateToProps)(Restaurants);
