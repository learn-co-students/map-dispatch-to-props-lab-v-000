import React, { Component } from 'react';
import RestaurantInput from './components/RestaurantInput';
import Restaurants from './components/Restaurants';
<<<<<<< HEAD
// mine
import { connect } from 'react-redux';
// mine
=======
import { connect } from 'react-redux';
>>>>>>> c1f8dffce914e4ef06a585c3dad336793aea1a9f
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

<<<<<<< HEAD
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
=======
const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: () => { dispatch(addRestaurant()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
>>>>>>> c1f8dffce914e4ef06a585c3dad336793aea1a9f
