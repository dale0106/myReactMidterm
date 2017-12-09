import React, {Component} from "react";
import PropTypes from "prop-types";

// ContactItem component will display the individual contact summary to be embedded inside the ul
class ContactItem extends Component{
    render(){
        return(
            <li className="list">
                <a href={"#/contact/" + this.props.id}>
                    <h1>{this.props.name.first + " " + this.props.name.last}</h1>
                    <img src={this.props.picture.thumbnail} alt="Img"/>
                    <p>{this.props.dob}</p>

                </a>
            </li>
        );
    }


}

// ContactItems will be a ul element which uses .map to iterate through each of the objects inside of contacts.js
// Remember to export this component as default as you will need to import it inside of Main.js
export default class ContactItems extends Component{

    render(){

        return(
            // React.createElement("ul", {className:"column"}, contacts.map(i => React.createElement(ContactItem, i)))
            <ul className="column">{this.props.myContacts.map(i => React.createElement(ContactItem, i))}</ul>
        );

    }


}

// Defining propTypes for each component
ContactItem.propTypes = {

    // Remember to use PropTypes.string and not React.string since we have imported PropTypes

    dob: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    picture: PropTypes.string,
    id: PropTypes.string

};

ContactItems.propTypes = {

    myContacts: PropTypes.array.isRequired
};