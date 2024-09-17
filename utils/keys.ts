export function getKeyName(...args: string[]) {
  return `konradzieba:${args.join(':')}`;
  // getKeyName("restaurant", "1"); => konradzieba:restaurant:1
}

// Restaurant keys
export const restaurantKeyById = (id: string) => getKeyName('restaurant', id);
export const reviewKeyById = (id: string) => getKeyName('review', id);
export const reviewDetailsKeyById = (id: string) =>
  getKeyName('reviewDetails', id);

// Cuisines keys
export const cuisinesKey = getKeyName('cuisines');
export const cuisineKey = (name: string) => getKeyName('cuisine', name);
export const restaurantCuisineKeyById = (id: string) =>
  getKeyName('restaurant_cuisines', id);

// Restaurant by rating key
export const restaurantByRatingKey = getKeyName('restaurant_by_rating');

// Weather keys
export const weatherKeyById = (id: string) => getKeyName('weather', id);
export const restaurantDetailsKeyById = (id: string) =>
  getKeyName('restaurant_details', id);

export const restaurantIndexKey = getKeyName('idx', 'restaurant');
