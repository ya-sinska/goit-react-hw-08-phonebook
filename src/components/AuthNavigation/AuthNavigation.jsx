import React from 'react';
import { Link } from './AuthNavigation.styled';

export const AuthNav = ()=> {
  return (
    <div>
      <Link
        to="/register"
      >
        Register
      </Link>
      <Link
        to="/login"
      >
        LogIn
      </Link>
    </div>
  );
}