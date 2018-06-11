import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class RestaurantInput extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: '', location: ''
    };
  }

  handleOnNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange(event) {
    this.setState({
      location: event.target.value
    });
  }

  handleOnSubmit(event) {
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
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    location: state.location,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addRestaurant: addRestaurant
  }, dispatch)
}
// the first `addRestaurant` is referencing a prop that my RestaurantInput component will have.
// the second `addRestaurant` references my action creator function that returns my action object to then send over to my dispatch function in my store.

export const ConnectedRestaurantInput = connect(mapStateToProps, mapDispatchToProps)(RestaurantInput)
