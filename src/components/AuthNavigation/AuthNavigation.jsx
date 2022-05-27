import React from 'react';
import { Link } from './AuthNavigation.styled';
import { resetError } from 'redux/authSlice';
import { useDispatch } from 'react-redux';

export const AuthNav = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Link
        to="/register"
        onClick={()=>(dispatch(resetError()))}
      >
        Register
      </Link>
      <Link
        to="/login"
        onClick={()=>(dispatch(resetError()))}
      >
        Log In
      </Link>
    </div>
  );
}