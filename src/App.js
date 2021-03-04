import React, { Component } from 'react';
import RestaurantInput from './components/RestaurantInput';
import Restaurants from './components/Restaurants';
// mine
import { connect } from 'react-redux';
// mine
import { addRestaurant } from './actions/restaurants';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <RestaurantInput />
        <Restaurants />
      </div>
    );
  }
};

// // mine
// const mapStateToProps = state => {
//   return {
//     restaurants: state.restaurants
//   }
// }

// // mine
// const mapDispatchToProps = dispatch => {
//   return {
//     addRestaurant: () => { 
//       dispatch(addRestaurant()) 
//     }
//   };
// };

// // mine
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
