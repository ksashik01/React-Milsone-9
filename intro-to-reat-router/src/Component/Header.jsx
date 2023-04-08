
import React from 'react';
import { Link } from 'react-router-dom';
import '../Component/header.css'
import ActiveLink from './ActiveLink/ActiveLink';


const Header = () => {
    return (
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <ActiveLink to="/friends">Friends</ActiveLink>
          <Link to="/posts">Posts</Link>

        </nav>
    );
};

export default Header;