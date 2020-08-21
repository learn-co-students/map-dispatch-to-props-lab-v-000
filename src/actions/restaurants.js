// Redux is already set up through index.js and the reducer manageRestaurants. 
// Write a mapDispatchToProps() function that allows you to pass dispatched actions as props.
// Remember that mapDispatchToProps() is provided dispatch as an argument 
  // (passed in by connect when called), so we can wrap an imported action with dispatch 
  // within mapDispatchToProps().
  
  


//The below function must be called in order to return the action object:

export const addRestaurant = (restaurant) => {
  return {
    type: 'ADD_RESTAURANT',
    restaurant
  };
};
