import React from 'react';
import '../App.css';
import { Router, Route, hashHistory } from 'react-router';


const NavBar = (props) => {
    return (
        <div className="container-fluid">
            <nav className="navbar  navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Software Quality Assurance</a>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            {/* <li><a href="#">Home</a></li> */}
                            <li><a>About</a></li>
                            {/* <li><a href="#">Articles</a></li> */}
                            {/* <li><a href="#">Contact</a></li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;