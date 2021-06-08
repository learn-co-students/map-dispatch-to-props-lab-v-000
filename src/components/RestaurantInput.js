import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRestaurant } from '../actions/restaurants';


export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
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
            onChange={(event) => this.handleOnChange(event)}
            name="name"
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            name="location"
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

const mapStateToProps=(state)=>({restaurants: state});
const mapDispatchToProps= (dispatch)=>({
    addRestaurant: (restaurant)=>dispatch(addRestaurant(restaurant)) 
})

//connect this component by wrapping RestaurantInput below

// export default connect((state)=>({restaurants: state}),{addRestaurant})(RestaurantInput)
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantInput);
