import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions';

const INITIAL_STATE = []

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ADD_TO_CART:
			return [
				...state,
				{
					category: action.category,
					code: action.code,
					size: action.size,
					qty: action.qty
				}
			]
		default:
			return state
	}
}