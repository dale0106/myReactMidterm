require("./main.scss");
import ReactDOM from "react-dom";
import Main from "./components/Main";
//import ContactInfo from "./components/ContactInfo";
import React from "react";
import contacts from "./data/contacts";

// Initialize the state
let state = {};

// Creating our setState function.
function setState(changes) {

    // Assigning a new object with a state + changes
    state = Object.assign({}, state, changes);
    // console.log(state);

    let splittedUrl = state.location.replace(/^#\/?|\/$/g, "").split("/");

    console.log(splittedUrl[1]);


    // setState({ContactInfo:{title:"Click on a contact"}, location: location.hash, myContacts: state.items.find(i => i.key == splittedUrl[1])});
    // Appending the entire document inside of the created element with id 'react-app'  found within index.ejs
    ReactDOM.render(


        React.createElement(Main, state), document.getElementById("react-app")

    );
}

// Runs on hashchange event
window.addEventListener("hashchange", ()=>setState({location: location.hash}));
// Running setState and initializing the name prop to 'World'
// We pass our actual contacts array of objects from inside data/contacts.js  as 'myContacts'. Keep in mind the name doesn't matter here
// Passing our list of contacts as 'myContacts' down to the Main component
setState({Main:{}, location: location.hash, myContacts: contacts });


