import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = event => {
    // console.log(event.target.value)
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange = event => {
    // console.log(event.target.value)
    this.setState({
      location: event.target.value
    });
    // debugger
  }

  handleOnSubmit = event => { //where does my app go from here??? I think to the action, then the reducer, then to restaurant component
    // debugger
    event.preventDefault();
    this.props.addRestaurant(this.state);
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            value={this.state.location}
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};


const mapDispatchToProps = dispatch => { //mapDispatchtoProps is sending this up to the store
  return {
    addRestaurant: (restaurant) => {
      dispatch(addRestaurant(restaurant))
    }
  };
};

//connect this component by wrapping RestaurantInput below
export default connect(null, mapDispatchToProps)(RestaurantInput) //connect is pulling addRestaurant into the props of this component so I can use in handleOnSubmit
