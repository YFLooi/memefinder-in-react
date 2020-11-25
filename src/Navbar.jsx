import React, { PureComponent } from "react";
import { connect} from 'react-redux';
import "./Navbar.css";

//The actions from './redux.js'
import { openQueryStore, checkQueryStore } from './redux';

class Navbar extends PureComponent {
    constructor(props){
        super(props);

        this.state = { 
            width: 0, 
            height: 0 
        };

        /*Creates refs to target DOM element*/
        this.col1 = React.createRef();
        this.guideOverlay = React.createRef();
        this.hiddenText2 = React.createRef();
        this.navButton = React.createRef();

        /*Binds functions to 'this'*/
        this.handleClick = this.handleClick.bind(this);
        this.guideOn = this.guideOn.bind(this);
        this.guideOff = this.guideOff.bind(this);
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() { 
         //Identifies viewport size
         /*Component is remounted each time the window is resized. That's why this works in detecting viewport size!*/
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        /*Appends the HTML-compatible onclick functions necessary for the quicklinks to work*/
        const searchterm = ['Reaction GIFs','Ragefaces','Marvel and DC','Overwatch','Star Wars','Donald Trump','Kim Jong-un',
        'Pepe the Frog','Come At Me Bro','Fabulous','Thumbs Up','WTF','LOL','OMG','I Don’t Care','Yes','Nope','Mind Blown',
        'Right In The Feels','Deal with it','Facepalm','Thank You','You’re Awesome','Haters Gonna Hate','Party Hard','That’s Racist','Fail','Birthday/Celebrate','Rage Faces']
        function quickSearchOnClick(){
            /*There are 28 quicklinks, so i<29*/ 
            for (let i = 0; i<29; i++) { 
                document.getElementById("quicklink"+i).setAttribute("onclick","quickSearch('"+searchterm[i]+"')");
            }
        }
        quickSearchOnClick() /*Runs the function created above*/
    } 
    componentWillUnmount() {
        //Each time the window is resized, the DOM is re-rendered. This ensures event listeners do NOT stack up
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    updateWindowDimensions() {
        this.setState({ 
            width: window.innerWidth, 
            height: window.innerHeight 
        });
        console.log('New viewport dimensions: Width: '+this.state.width+' Height: '+this.state.height)
    }

    /*Sends quicklink term to Redux store*/
    handleClick(term) {
        const currentQuicklink = term;
        this.props.submitNewQuery(currentQuicklink);        
    }	

    //Opens and closes #guide
    guideOn() {
        this.guideOverlay.current.style.display = "block";
    }
    guideOff() {
        this.guideOverlay.current.style.display = "none";
    }
    //Opens and closes #mysidenav
    openNav() {
        this.navButton.current.style.display = "none";
        this.col1.current.style.display = "block";
    }
    closeNav() {
        if (this.state.width<769){
            this.navButton.current.style.display = "block";
            this.col1.current.style.display = "none";
        }
    }
    render() {
        return (
            <div>
                <div id="col-1" ref={this.col1} className="col-1">
                    {/*Clicking anywhere within the Overlay will cause it to become 'hidden' again. Easy!*/}
                    <div id="guideOverlay" ref={this.guideOverlay} onClick={this.guideOff}>
                        <div id="guide">
                            <div>Note: Image load time varies by source</div>
                            <u>On PC:</u>
                            <ol>
                                <li>
                                    <div>Find memes using the search box. Set for images or GIFs in 'File Type'</div>
                                    <img alt="Enter query into search box" src="./media/guide1.png" style={{width:"30%",height:"12%"}}/>
                                </li>
                                <li>
                                    <div>Click to copy link to meme</div>
                                    <img alt="Click meme to copy link" src="./media/guide2.png" style={{width:"40%",height:"auto"}} />

                                </li>
                                <li>
                                    <div>Go back to the upload site. Click on the image upload button</div>
                                    <img alt="Open upload option at target site" src="./media/guide3.png" style={{width:"40%",height:"auto"}} />
                                </li>
                                <li>
                                    <div>In the popup, Paste the copied link in 'File name'</div>
                                    <img alt="On prompt, paste copied link in 'File name'" src="./media/guide4.png" style={{width:"95%",height:"auto"}} />
                                </li>
                                <li>
                                    <div>Finally, click open and wait. You have just posted a meme!</div>
                                    <img alt="Meme posted" src="./media/guide5.gif" style={{width:"40%",height:"auto"}}/>
                                </li>                
                            </ol> 
                            <div>
                                <u>On mobile:</u>
                                <div>Search as on PC. Press and hold a meme and click 'Save Image'. Upload.</div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img alt="Mobile guide" src="./media/guide6.png" style={{width:"40%",height:"auto"}} />
                            </div>
                        </div>
                    </div>
                    
                    <div id="myCategories" className="categories"> {/*<!--Clicking anywhere within <div> closes sidebar-->*/}
                        <button className="guideButton" onClick={() => {this.guideOn();}}>Guide</button>
                        <button className="closeButton" onClick={() => {this.closeNav();}}>Close</button>
                        <Quicklinks handleClick={this.handleClick} closeNav={this.closeNav}/>
                    </div>   
                </div>
                
                {/*Place outside of col-1 to prevent from being hidden together with col-1 in mobile mode*/}
                <span id="navButton" className="navButton" ref={this.navButton} onClick={this.openNav}>&#9776;</span>
                
            </div>
        );
    }
}

export default Navbar;

class Quicklinks extends PureComponent {
    render(){
        /*The HTML appraoch of using a for loop to append each element to a button does not work for React. Use array.map instead*/
        const searchterm = ['Reaction GIFs','Ragefaces','Marvel and DC','Overwatch','Star Wars','Donald Trump','Kim Jong-un',
        'Pepe the Frog','Come At Me Bro','Fabulous','Thumbs Up','WTF','LOL','OMG','I Don’t Care','Yes','Nope','Mind Blown',
        'Right In The Feels','Deal with it','Facepalm','Thank You','You’re Awesome','Haters Gonna Hate','Party Hard','That’s Racist','Fail','Birthday/Celebrate','Rage Faces']

        return(
            <div>
                {/*Notice how this function does not use curly braces!*/}
                {/*'term' and 'key' are inherent to .map(). 'Term' iterates over each array element,
                key does the same but as a counter which starts from zero*/}
                 {/*<br> not needed. JSX automatically breaks <button>*/}
                {searchterm.map(
                    (term, key) => (
                        <button key={key} id={"quicklink"+key} className="quicklink" onClick={() => {this.props.handleClick(term); this.props.closeNav();}}>{term}</button> 
                    )
                )}
                
            </div>
        )    
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
export const NavbarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Navbar);