import React from 'react';
import '../App.css';

const BlockButton = (props) => {
    return (
        <a href={props.url} target={props.target}>
            <div className="block_button" >
                {props.name}
            </div>
        </a>
    );
}

export default BlockButton;