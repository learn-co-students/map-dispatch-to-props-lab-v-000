import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state);
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};
// Redux is already set up through index.js and the reducer manageRestaurants. Write a mapDispatchToProps() function that allows us to pass dispatched actions as props.
//
// Remember that mapDispatchToProps() is provided dispatch as an argument (passed in by connect when called), so we can wrap an imported action with dispatch within mapDispatchToProps(). Don't forget that the action provided in actions/restaurants.js is a function that must be called in order to return the action object.

// const mapDispatchToProps = dispatch => {
//   return {
//     addRestaurant: () => {
//       dispatch(addRestaurant())
//     }
//   };
// }

//connect this component by wrapping RestaurantInput below
export default connect(null, {addRestaurant})(RestaurantInput)
