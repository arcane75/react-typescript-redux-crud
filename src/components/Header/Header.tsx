import React from 'react';
import { Link } from 'react-router-dom';
import './Header.style.scss';

const Header = () => {
    return (
        <div className='header-container'>

            <div id="navigation-bar">
                <nav>
                    <ul>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/private">Private</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;