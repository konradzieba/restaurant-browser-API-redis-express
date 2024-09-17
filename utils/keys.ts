export function getKeyName(...args: string[]) {
  return `konradzieba:${args.join(':')}`;
  // getKeyName("restaurant", "1"); => konradzieba:restaurant:1
}

export const restaurantKeyById = (id: string) => getKeyName('restaurant', id);
export const reviewKeyById = (id: string) => getKeyName('review', id);
export const reviewDetailsKeyById = (id: string) =>
  getKeyName('reviewDetails', id);
