import React, { Component } from 'react';
import RestaurantInput from './components/RestaurantInput';
import Restaurants from './components/Restaurants';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <RestaurantInput />
        {/* //beautifully, we don't need to pass any props down through the children components */}
        <Restaurants />
      </div>
    );
  }
};

export default App;
