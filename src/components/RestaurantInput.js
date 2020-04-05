import React, { Component } from "react";
import { connect } from "react-redux";
import { addRestaurant } from "../actions/restaurants";

export class RestaurantInput extends Component {
  state = {
    name: "",
    location: "",
  };

  handleOnNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnLocationChange = (event) => {
    this.setState({
      location: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const { name, location } = this.state;
    this.props.addRestaurant({ name, location });
  };

  render() {
    return (
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name"
          />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location"
          />
        </p>
        <input type="submit" />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});

export default connect(mapStateToProps, { addRestaurant })(RestaurantInput);
