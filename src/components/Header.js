import React, {Component} from "react";

// Importing our propTypes?
//import PropTypes from "prop-types";

// Main Component goes here
export default class Header extends Component {
    render() {
        return (
            <div className="title">
                <h1> My Contacts</h1>
            </div>
        );
    }
}


// Main component has propTypes 'name'
Header.propTypes = {
    //title: PropTypes.string.isRequired
};