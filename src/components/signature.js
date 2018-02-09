import React from 'react';
import '../App.css';

const Signature = (props) => {
    return (
        <div className="signature">
            {props.name}
        </div>
    );
}

export default Signature;