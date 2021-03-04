import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  
  handleOnNameChange = event => {
    // debugger
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
    // add missing code
    // debugger
    // mine
    const restaurant = this.state;
    // mine
    // debugger
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

// const mapStateToProps = (state) => {
  // restaurants: state.restaurants
// }

const mapStateToProps = state => {
  return {
    // restaurants: state.restaurants
    state

  }
}

// mine
const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: (state) => { 
      dispatch(addRestaurant(state)) 
    }
  };
};
//connect this component by wrapping RestaurantInput below
// mine
export default connect(null, mapDispatchToProps)(RestaurantInput);