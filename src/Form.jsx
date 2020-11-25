import React, { PureComponent } from "react";
import { connect} from 'react-redux';

//The actions from './redux.js'
import { openQueryStore, checkQueryStore } from './redux';

import "./Form.css";

export class Form extends PureComponent {
    constructor(props) {
		super(props);		
        
        this.state = {
			input: '' 
        }
        
		this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){        
        /*Adds the HTML onclick attributes to .searchbox and #enterbutton once the enter key is pressed.
        This is so that they can interract with the Bing image search library located in %public%*/
        /*Necessary because HTML attributes like onclick CANNOT be rendered server-side. Only the JSX onClick works. and that is only with code on the server side*/
        /*For the searchbox #term*/
        document.getElementById("term").addEventListener('keydown', function(event){
            if (event.keyCode === 13) {
                /*This works because hitting the Enter key = onClick*/
                document.getElementById("bing").setAttribute("onclick","return newBingImageSearch(this)")
            }
        });
        document.getElementById("term").addEventListener('keyup', function(event){
            if (event.keyCode === 13) {
                document.getElementById("bing").removeAttribute("onclick")
            }
        });
        /*For the search button*/
        document.getElementById("enterbutton").addEventListener('mousedown', function(event){
            document.getElementById("bing").setAttribute("onmouseup","return newBingImageSearch(this)");
        });
        /*onmouseout removes the "onmouseup" attribute appended to #bing before it executes. 
        This approach ensures "return newBing..." is only removed after the user starts scrolling the results*/
        document.getElementById("enterbutton").addEventListener('mouseout', function(event){
            document.getElementById("bing").removeAttribute("onmouseup");
        });
    }
	handleChange(event) {
		this.setState({
			input: event.target.value,
		});
	}
	handleSubmit(event) {
        event.preventDefault();
        const currentQuery = this.state.input;
        this.props.submitNewQuery(currentQuery);
        
        /*this.setState({
            input: '' 
            Clears this.state.input after submitting query, resulting in a blank box
            Don't do this: The doPrevSearch() and doNextSearch() functions use the stored 'value' in the 
            query box to search the prev/next results
        });
        */
    }	
    render() {
        return (
        <div>
            {/*<!--onsubmit runs when the enter key is hit!-->*/}
            <form name="bing" id="bing" onSubmit={this.handleSubmit}> 
                <div id="query"> {/*<!-- query controls including search field and options -->*/}        
                    <p> 
                        <input
                            type="text"
                            name="query" id="term" className= "searchbox"
                            value={this.state.input}
                            placeholder="Search memes and GIFs"
                            autoComplete="off"
                            onChange={this.handleChange}
                        />
                        {/*The search button. If "onClick=this.handleSubmit" not specified here, this.handleSubmit will not run when the Enter key is pressed*/}
                        <input type="submit" value="&#8981;" id="enterbutton" className="enterbutton" onClick={this.handleSubmit}/> {/*How to trigger event.keyCode === 13;?*/}
                    </p>

                    <p> 
                        {/*React sets default option on page load to the 1st option*/}
                        <select name="type" id="type" ref={elem => this.type = elem}>
                            <option value="" >IMG and GIFs</option>
                            <option value="AnimatedGif">Only GIFs</option>
                        </select>
                        &nbsp;
                        {/*React sets default option on page load to the 1st option*/}
                        <select name="when" id="when" ref={elem => this.when = elem}>
                            <option value="" >All time</option>
                            <option value="year">Past year</option>
                            <option value="month" >Past month</option>
                        </select>
                        &nbsp;
                        {/*Default option on page load: Checked*/}
                        <input type="checkbox" id="safe" name="safe" value="on" defaultChecked="true"/><label htmlFor="safe">SafeSearch</label>
                    </p>
                        
                    {/*<!-- these hidden fields control paging -->*/}
                    
                    <div id="pagingSettings"></div>
                    <input type="hidden" name="count" value="20" />
                    <input type="hidden" name="offset" value="0" />
                    <input type="hidden" name="nextoffset" value="" />    
                    <input type="hidden" name="stack" value="[]" />

                </div>
            </form> {/*<!--Sets up query URL for Bing search-->*/} 
        </div>
        );
    }
}

// AppContainer.js 
//Maps reducer state in redux.js to a prop named 'query' 
const mapStateToProps = (state) => ({
	query: state.query
});
//Maps props to both action creators in redux.js
const mapDispatchToProps = (dispatch) => {
    return {
        submitNewQuery: (query) =>{
            dispatch(openQueryStore(query))
        },
        checkQueryStore: () =>{
            dispatch(checkQueryStore)
        }
    }
};
export const FormContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Form);

