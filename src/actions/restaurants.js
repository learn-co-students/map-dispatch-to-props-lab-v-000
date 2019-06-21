export const addRestaurant = (restaurant) => {
  return {
    type: 'ADD_RESTAURANT',
    restaurant // both a key and a value
  };
};
