import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

// This is an example of how to map state to props and
// map dispatch to props. This component has local state
// that holds form state, but upon form submission, calls
// a locally defined method (addRestaurnt2) that has been
// mapped in mapDispatchToProps to an imported method
// called addRestaurant. The imported method is an action
// creator that takes a restaurant object as an argument and
// returns a new action object containing that restaurant
// object. The mapping is actually to a call to dispatch(
// addRestaurant(restaurant)). This way, we can abstract
// out any mention of dispatch in our handleOnSubmit 
// handler. If we weren't using this mapping, we'd need 
// to include this.props.dispatch(...) in the handler.

export class RestaurantInput extends Component {

  // Local state
  state = {
    name: '',
    location: ''
  }

  // Set local state upon name change event
  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  // Set local state upon location change event
  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  }

  // Set state in store upon submit by calling addRestaurant,
  // a function that we defined locally and mapped in 
  // mapDispatchToProps to the addRestaurant action creator.
  handleOnSubmit = event => {
    event.preventDefault();
    // Use the addRestaurant2 method we mapped to props below
    this.props.addRestaurant2({name: this.state.name, location: this.state.location});
    
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

// Map our our locally defined "restaurants" to the "restaurants" 
// array in store. The "state" parameter will be suppliedd by 
// connect()
const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants
  }
}

// Map our locally defined addRestaurant function to the 
// addRestaurant action creator. The "dispatch" parameter will
// be supplied by connect().
// addRestaurant will be called by our submit handler up above. 
// We need to map the local addRestaurant2 method to the call 
// to dispatch the addRestaurant action-creator. It will take 
// the new state (restaurant) and pass it along to the wrapped 
// addRestaurant, which will use it to add the restaurant object 
// to the store. 
const mapDispatchToProps = (dispatch) => {
  return {
    addRestaurant2: (restaurant) => dispatch(addRestaurant(restaurant)),
  }
}

//connect this component by wrapping RestaurantInput below
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantInput);
