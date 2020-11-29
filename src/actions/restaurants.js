export const addRestaurant = (restaurant) => {
  return {
    type: 'ADD_RESTAURANT',
    restaurant: restaurant
  };
};



//
//
// ---------
// 2
// you don't actually need an actions file, it's more for separation of concerns, or
// modularity. so you know actions are here.
//
// 1
// there is object destructuring happening here. This is the action that's being dispatched. can put :restaurant for the full syntax.
// restaurant here is the same as 'payload'- we don't usually call it that. Perhaps 'data', or something specific like restaurant.
// export const addRestaurant = (restaurant) => {
//   return {
//     type: 'ADD_RESTAURANT',
//     restaurant
//   };
// };
//
//
//
//
// export const addRestaurant = (restaurant) => {
//   return {
//     type: 'ADD_RESTAURANT',
//     restaurant: restaurant
//   };
// };
