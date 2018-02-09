import React from 'react';
import '../App.css';

const PageTitle = (props) => {
    return (
        <h1 className="App">{props.name}</h1>
    );
}

export default PageTitle;