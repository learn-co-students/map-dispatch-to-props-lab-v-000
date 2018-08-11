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
//      [event.target.id]: event.target.value //why doesn't this work?
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

// const mapStateToProps = state => {
//   return { restaurants: state.restaurants }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     addRestaurant: () => {
//       dispatch(addRestaurant())
//     }
//   }
// }


//connect this component by wrapping RestaurantInput below
//export default connect(null, {mapStateToProps, mapDispatchToProps})(RestaurantInput); //why doesn't this work?

export default connect(null, {addRestaurant})(RestaurantInput); // don't get the "null"
