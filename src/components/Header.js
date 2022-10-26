import React from 'react';
import logo from '../photos/logo.png';
import '../stylesheets/Header.css';
import { Link, Route, Routes } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav
        class='navbar is-fixed-top'
        role='navigation'
        aria-label='main navigation'
      >
        <div class='navbar-brand'>
          <Link to='/' class='navbar-item' href='#'>
            <img src={logo} width='112' />
          </Link>

          <a
            role='button'
            class='navbar-burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div id='navbarBasicExample' class='navbar-menu'>
          <div class='navbar-start'>
            <Link to='/' class='navbar-item'>
              Home
            </Link>

            <Link to='/about' class='navbar-item'>
              About
            </Link>

            <Link to='/projects' class='navbar-item'>
              Projects
            </Link>

            <Link to='/contact' class='navbar-item'>
              Contact
            </Link>
          </div>

          <div class='navbar-end'>
            <div class='navbar-item'>
              <a class='navbar-item'>
                <i class='fa-brands fa-linkedin-in fa-xl'></i>
              </a>
              <a class='navbar-item'>
                <i class='fa-brands fa-github fa-xl'></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
