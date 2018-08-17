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
    // add missing code
    event.preventDefault();
    const restaurant = {
      name: this.state.name,
      location: this.state.location,
    }
    this.props.addRestaurant(restaurant)
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

// const mapDispatchtoProps = dispatch => {
//   return {
//     addRestaurant: () => {
//       dispatch(addRestaurant())
//     }
//   }
// }


const mapStateToProps = state => {
  return {
    name: state.name,
    location: state.location
  }
}

export default connect(mapStateToProps, {addRestaurant} )(RestaurantInput)
//connect this component by wrapping RestaurantInput below
// export default connect(mapDispatchtoProps)(RestaurantInput)
// export default connect(mapDispatchtoProps)(RestaurantInput);
