//These two are in? The redux package
import {
	createStore,
} from 'redux';

// ./actions/index.js
//contains all action creators
export const openQueryStore = (query) => ({
		type: 'Open_QueryStore',
		query
});
/*Clears store. For now, it clears on page load*/
export const closeQueryStore = () => ({
	type: 'Close_QueryStore'
});
export const checkQueryStore = () => ({
	type: 'Check_QueryStore'
});

// ./reducers/index.js
export const query = (state, action) => {
	switch (action.type) {
		case 'Open_QueryStore':
			return [
				...state,
				action.query
			];
		case 'Close_QueryStore':
			return [];
		default:
			return state;
	}
};
export const reducers = query

// store.js
// Creates and attaches the redux store to 'const store'. The function configureStore() generates the store
export function configureStore(initialState = []) {
	const store = createStore(reducers, initialState);
	return store;
};
export const store = configureStore();

if(process.env.NODE_ENV !== 'production') {
	window.store = store;
}