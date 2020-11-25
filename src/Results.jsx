import React, { PureComponent } from "react";
import "./Results.css";

class Results extends PureComponent {
    render() {
        return (
            <div>
                <div id="error">
                    <h2>Unable to obtain results</h2>
                    <div id="_error"></div>
                </div>

                {/**/}
                
                <div id="paging1">
                    <div id="_paging1"></div>
                </div>
                
            
                <div id="noresults">
                    <div id="_noresults"><i></i></div>
                </div>
            
                <div id="results">
                    <div id="_results" className="container"></div>
                </div>
            
               
                <div id="paging2">
                    <div id="_paging2"></div>
                </div>
               

                <div id="popup"><b>Link Copied!</b></div>
            </div>
        );
    }
}
export default Results;

