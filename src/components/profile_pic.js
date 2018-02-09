import React from 'react';
import '../App.css';

const ProfilePicture = (props) => {
    return (
        <div className="profile_pic_wrapper">
            <img className="profilePic" src={require("../images/profile_pic_ali_1.jpg")} alt={props.name} />
            <div className="caption">
                <h2 className="no_margin">
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