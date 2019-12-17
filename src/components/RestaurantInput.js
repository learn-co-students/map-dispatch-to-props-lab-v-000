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
    const { name, location } = this.state
    this.props.addRestaurant({name, location})
    this.setState({
      name: '',
      location: ''
    })
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name"
            value={this.state.name}
            />

        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location"
            value={this.state.location}
            />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  addRestaurant: (restaurant) => dispatch(addRestaurant(restaurant))
})

export default connect(null, mapDispatchToProps)(RestaurantInput)
