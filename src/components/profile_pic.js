import React from 'react';
import '../App.css';

const ProfilePicture = (props) => {
    return (
        <div className="profile_pic_wrapper">
            <img src={require("../images/profile_pic_ali_1.jpg")} alt={props.name} width="270" height="300"/>
            <div className="caption">
                <h2>
                    {props.name}
                </h2>
                <h4>
                    {props.title}
                </h4>
            </div>
        </div>
    );
}

export default ProfilePicture;