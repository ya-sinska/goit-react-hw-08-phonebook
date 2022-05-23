import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <nav>
    <NavLink to="/">
      Home
    </NavLink>

    <NavLink
      to="/contacts"
    >
      Contacts
    </NavLink>
  </nav>
);