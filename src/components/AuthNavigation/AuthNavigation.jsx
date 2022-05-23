import React from 'react';
import { NavLink } from 'react-router-dom';

export const AuthNav = ()=> {
  return (
    <div>
      <NavLink
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
      >
        LogIn
      </NavLink>
    </div>
  );
}