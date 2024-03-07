import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <div className='nav-bar'>
        <div className="nav-container">
            <div className="nav-left">
                <img src="https://app.koinx.com/static/media/Logo.3331aa2fc2f35c00e58921b44a2ebf0d.svg" alt="KoinX-Logo" className='logo-img' />
            </div>
            <div className="nav-right">
                <div className="option">
                    Crypto Taxes
                </div>
                <div className="option">
                    Free Tools
                </div>
                <div className="option">
                    Resource Center
                </div>
                <div className="option">
                    Get Started
                </div>
            </div>
        </div>
    </div>
  );
}

export default Nav;