import React from 'react';
// import '../App.css';
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
            <nav className="navbar navbar-default navbar-inverse" role="navigation">
                <div className="container-fluid" id="navfluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigationbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to='/' className="navbar-brand">Software Quality Assurance</Link>
                    </div>
                    <div className="expanded navbar-expanded" id="navigationbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/articles'>Articles</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}

export default Header;
