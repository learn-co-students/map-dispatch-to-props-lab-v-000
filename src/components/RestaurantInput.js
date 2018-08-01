import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRestaurant } from '../actions/restaurants';

export class RestaurantInput extends Component {

  constructor(){
    super();
    this.state = {name: '', location: ''};
  }

  handleOnChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.addRestaurant(this.state);
    this.setState({name: '', location: ''});
  }

  render() {
    return (
      <form onSubmit={event => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={event => this.handleOnChange(event)}
            placeholder="restaurant name"
          />
        </p>
        <p>
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={event => this.handleOnChange(event)}
            placeholder="restaurant location"
          />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

export const ConnectedRestaurantInput = connect(
  null,
  {addRestaurant}
)(RestaurantInput);
