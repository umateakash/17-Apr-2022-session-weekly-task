import React from "react";
import ReactDOM from "react-dom";

const Team = (props) =>{
    return(
        <div className="ui card">
            <div className="image">
                <img src={props.avatar} alt="Card"/>
            </div>
            <div className="content">
                <a className="header">{props.name}</a>
                <div className="meta">
                <span className="date">{props.role}</span>
                </div>
                <div className="description">{props.description}</div>
            </div>
            <div className="extra content">
                <a>
                <i className="user icon"></i>
                {props.friends_count} Friends
                </a>
            </div>
        </div>

    )
}

export default Team;