import React from 'react';
import '../App.css';

const BlockButton = (props) => {
    return (
        <a href={require("../documents/Ali_Haydar_resume.pdf")} download="Ali_Haydar_resume.pdf" >
            <div className="block_button" >
                {props.name}
            </div>
        </a>
    );
}

export default BlockButton;
// require("../images/profile_pic_ali_1.jpg")