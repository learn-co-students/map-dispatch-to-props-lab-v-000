export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  console.log(action.restaurant)
  switch (action.type) {

    case 'ADD_RESTAURANT':
      return {
        ...state,
        restaurants: [...state.restaurants, action.restaurant]
      }

    default:
      return state;

  }
};
