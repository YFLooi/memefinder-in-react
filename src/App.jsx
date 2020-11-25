import React from 'react';

//Controls positioning of individual columns and applies general styling
import './App.css';

//imports React components to render()
import Header from "./Header.jsx";
import {NavbarContainer} from "./Navbar.jsx";
import Results from "./Results.jsx";
import {FormContainer} from "./Form.jsx"; //Non-default exports need to be wrapped in curly braces


// App.js value={this.state.input}
export class App extends React.Component {
	render() {
		return (
			<div>
				{/*Contains the banner and page title "Memefinder"*/}
				<Header/>

				{/*Contains the quicklinks and guide. className"col-1" specified in <Navbar/> for 
				CSS to control because it acts as an overlay when in mobile mode*/}
				<NavbarContainer />
				
				{/*Contains the <form> which is passed to the Bing Images library in %public%
				Library not placed within %src% due to compatibility issues*/}
				<div className="col-2"> 
					<FormContainer />
				</div> 
				
				{/*Displays the search results. Has an error message if an invalid search
				is entered*/}
				<div className="col-3">
					<Results/>
				</div>
				
			</div>
		);
	}
}

export default App;