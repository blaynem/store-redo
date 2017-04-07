import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import App from './containers/App';

let store = createStore(reducers);

import { addToCart } from './actions';

console.log(store.getState());
store.dispatch(addToCart("mens_outerwear", "10-15068", "md", 3));
console.log(store.getState());
store.dispatch(addToCart("ladies_outerwear", "10-25058", "sm", 1));
console.log(store.getState());
store.dispatch(addToCart("mens_tshirts", "10-13239", "xs", 2));
console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
);
