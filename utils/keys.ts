export function getKeyName(...args: string[]) {
	return `konradzieba:${args.join(':')}`;
	// getKeyName("restaurant", "1"); => konradzieba:restaurant:1
}

export const restaurantKeyById = (id: string) => getKeyName('restaurant', id);
