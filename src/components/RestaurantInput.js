import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

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
      [event.target.id]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state)
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            value={this.state.name}
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            value={this.state.location}
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};


const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addRestaurant: addRestaurant
  }, dispatch);
}; 

export default connect(null, mapDispatchToProps)(RestaurantInput)

// const mapStateToProps = state => {
//   return {
//     restaurantName: state.name,
//     restaurantLocation: state.location
//   }
// }
