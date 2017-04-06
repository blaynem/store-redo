export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export function addToCart(code, size, qty) {
	return {
		type: ADD_TO_CART,
		code,
		size,
		qty
	};
}

export function removeFromCart(code) {
	return {
		type: REMOVE_FROM_CART,
		code
	};
}