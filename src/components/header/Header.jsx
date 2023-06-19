import React from 'react';
import '../../styles/header.css';

const nav__links = [
    {
        Path: '#',
        display: 'Home'
    },
    {
        Path: '#',
        display: 'Schedule'
    },
    {
        Path: '#',
        display: 'Classes'
    },
    {
        Path: '#',
        display: 'Pricing'
    },
]

const Header = () => {
    return (
    <header className='header'>
        <div className="container">
            <div className="nav__wrapper">
                     {/* LOGO */}
                <div className="logo">
                    <div className="logo__img"> <img src="" alt='logo' /></div>
                    <h2>BodyFiti</h2>
                </div>
            {/* NAVIGATION MENU */} 
            <div className="navigation">
                <ul className='menu'>

                {
                    nav__links.map(item => (
                        <li className='nav_item'><a href={item.path}>
                            {item.display}</a></li>
                    ))
                }
                </ul>
            </div>
            {/* NAVIGATION RIGHT */}
            <div className="nav_right">
                <button className='register_btn'>Register</button>
                <span className='mobile_menu'></span>
            </div>
            </div>
        </div>
    </header>
    )
};

export default Header;