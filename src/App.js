import React, { Component } from 'react';
import RestaurantInput from './components/RestaurantInput';
import Restaurants from './components/Restaurants';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <RestaurantInput store={this.props.store}/>
        <Restaurants />
      </div>
    );
  }
};


export default App;
