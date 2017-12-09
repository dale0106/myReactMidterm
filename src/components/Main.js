import React, {Component} from "react";
import PropTypes from "prop-types";

// COMPONENTS
// Importing the header
import Header from "./Header";
// Importing the list of contacts
import ContactItems from "./ContactsComponent";
// Importing detailed contact component
import ContactInfo from "./ContactInfo";
//import Helpers from "../helpers/Helpers";


// Main Component goes here. This is the ROOT element
export default class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ContactItems myContacts={this.props.myContacts}/>
                <ContactInfo/>

            </div>
        );
    }
}


// Proptypes for Main component
Main.propTypes = {

    // Passing the contacts down to the ContactItems component
    myContacts: PropTypes.array.isRequired
};