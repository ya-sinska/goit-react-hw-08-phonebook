import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/authSlice';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)
 return (
  <nav>
    <NavLink to="/">
      Home
    </NavLink>

    {isLoggedIn&&<NavLink
      to="/contacts"
    >
      Contacts
    </NavLink>}
  </nav>
); 
} 