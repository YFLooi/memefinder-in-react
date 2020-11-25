import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Redux step 1: Add these imports 
import { Provider } from 'react-redux';
import { store } from './redux';

//Redux step 2: Wrap existing app in Provider 

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,

	//This sets the render target of the 'App' component at '<div id = root>' in /%public%/index.html 
	document.getElementById('root')
);
