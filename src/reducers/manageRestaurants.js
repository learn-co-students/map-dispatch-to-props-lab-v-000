export default function manageRestaurants(state = {
  restaurants: []
}, action) {

  debugger

  switch (action.type) {

    case 'ADD_RESTAURANT':
      return Object.assign({}, state, {
        restaurants: state.restaurants.concat(action.restaurant)
      });

    default:
      return state;

  }
};
