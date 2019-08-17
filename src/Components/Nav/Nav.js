import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <nav className='nav'>
                <h1 className='logo'>Abd Alwahab</h1>
                <ul className='nav__list'>
                    <li className='nav__item'><NavLink to='/' className='nav__link'>Home</NavLink></li>
                    <li className='nav__item'><NavLink to='/about' className='nav__link'>About</NavLink></li>
                    <li className='nav__item'><NavLink to='/blog' className='nav__link'>Blog</NavLink></li>
                    <li className='nav__item'><NavLink to='/contact' className='nav__link'>Contact</NavLink></li>
                    <li className='nav__item'><NavLink to='/shop' className='nav__link'>Shop</NavLink></li>
                </ul>
            </nav>
        )
    }
}


export default Nav;