import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

// Note : Tests work with or without the "export" here (probably because of the below export) 
class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  // Note : Apparently this is the required code (according to previous student work and odd test errors)
  handleOnLocationChange = event => {
    this.setState({
      // [event.target.id]: event.target.value
      location: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // add missing code
    
    // Note : Apparently this is the required code (according to previous student work and odd test errors)
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


// Note : Not used because causes an odd error 
const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: () => {
      dispatch(addRestaurant())
    }
  };
};

//connect this component by wrapping RestaurantInput below
// export default RestaurantInput

// Note : Apparently this is the required code despite the lesson instructions (according to previous student work and odd test errors)
export default connect(null, { addRestaurant })(RestaurantInput);
