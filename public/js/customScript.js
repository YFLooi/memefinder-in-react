/*For copying text from img with id 'myInput'*/
function copyImageLocation(index) {
    //Tutorial: https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
    /* Get the text inside the target attribute */
    var copyText = document.getElementById("imgItem"+index).getAttribute("href");
    console.log("Attribute value read: " +copyText);
    
    //Create a textbox, append the grabbed text inside the textbox. 
    //<textarea> is an element that create a click-expandable textbox
    var placeholderElement = document.createElement('textarea');
    placeholderElement.value = copyText;
    //Append element to html <body>, copy, then remove the element
    document.body.appendChild(placeholderElement);
    placeholderElement.select();
    document.execCommand("copy"); /*copy text*/
    document.body.removeChild(placeholderElement);
    
    //JS for the popup in clicking image
    var element = document.getElementById("popup");
    /*classList adds a class to the target popup <div>. Since that class is tied to CSS 
    .popupStyle, it causes the <div> to change appearance, hence becoming a popup!*/
    /*Triggering classList a second time removes the added class*/
    //For more recent browsers
    if (element.classList) {
        element.classList.toggle("popupStyle");
        /*Timeout that closes popup*/
        setTimeout(function () { 
            element.classList.toggle("popupStyle");
        }, 1000);
        return false;
    } else {
        // For IE9 which is not compatible with classList
        var classes = element.className.split(" ");
        var i = classes.indexOf("popupStyle");

        if (i >= 0)
            classes.splice(i, 1);
        else            
            classes.push("popupStyle");
            element.className = classes.join(" ");
            
            setTimeout(function () {
                classes.push("popupStyle");
                element.className = classes.join(" ");
            }, 1000);
            return false;
    }
} 

function srctogif(id){
    var image = id.removeAttribute("src");
    var source = id.getAttribute("href");
    var createSource = id.setAttribute('src', source);
}
function srctoimg(id){
    var image = id.removeAttribute("src");
    var source = id.getAttribute("href2");
    var createSource = id.setAttribute('src', source);
}
