let initState = {
  restaurants: []
};

export default function manageRestaurants(state = initState, action) {
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
