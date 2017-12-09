import React, {Component} from "react";
import PropTypes from "prop-types";

export default class ContactInfo extends Component {
    render() {
        return (
            <div className="contactInfo">
                {/*<h1>{this.props.name.first + " " + this.props.name.last}</h1>*/}
                {/*<img src={this.props.image.thumbnail} alt=""/>*/}
                {/*<b>{this.props.email}</b>*/}
                {/*<p>{this.props.dob}</p>*/}
                {/*<p>{this.props.cell}</p>*/}
                {/*<p>{this.props.gender}</p>*/}
                Select A contact
            </div>
        );
    }
}

ContactInfo.propTypes = {

    gender: PropTypes.string,
    dob: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    picture: PropTypes.string,
    id: PropTypes.string,
    location: PropTypes.string,
    cell: PropTypes.string

};