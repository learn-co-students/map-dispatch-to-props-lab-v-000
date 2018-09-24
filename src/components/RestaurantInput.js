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
      // [event.target.id]: event.target.value
    });
    console.log(this.state);
  }

  // handleChange = event => {
  //   this.setState({
  //     [event.target.id]: event.target.value
  //   })
  //   console.log(this.state)
  // }

  handleOnSubmit = event => {
    event.preventDefault();
    // add missing code
    this.props.dispatch(addRestaurant(this.state))
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

// const mapDispatchToProps = dispatch => {
//   return { 
//     addResturant: () => {
//       dispatch(addResturant())
//     } 
//   }
// }

// const mapStateToProps = state => {
//   return { resturants: {name: state.name,
//           location: state.location}
//              }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   }
// }


//connect this component by wrapping RestaurantInput below
export default connect()(RestaurantInput)
// export default RestaurantInput
