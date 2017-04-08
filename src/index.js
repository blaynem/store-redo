import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import App from './containers/App';

let store = createStore(reducers);

import { addToCart, removeFromCart } from './actions';

// console.log("store start", store.getState());
store.dispatch(addToCart("mens_outerwear", "10-15068", "md", 3));
// store.dispatch(addToCart("ladies_outerwear", "10-25058", "sm", 1));
// store.dispatch(addToCart("mens_tshirts", "10-13239", "xs", 2));
// store.dispatch(addToCart("ladies_outerwear", "10-25058", "sm", 3));
// store.dispatch(addToCart("mens_tshirts", "10-13239", "xs", 1));
// console.log("store after multiple dispatches", store.getState());
// store.dispatch(removeFromCart(0))
// console.log("store after removeFromCart", store.getState());
// store.dispatch(removeFromCart(2))
// console.log("store after removeFromCart", store.getState());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
);
