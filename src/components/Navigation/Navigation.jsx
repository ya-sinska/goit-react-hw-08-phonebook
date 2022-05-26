import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/authSlice';
import { Link } from 'components/AuthNavigation/AuthNavigation.styled';
export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)
 return (
  <nav>
    <Link to="/">
      Home
    </Link>

    {isLoggedIn&&<Link
      to="/contacts"
    >
      Contacts
    </Link>}
  </nav>
); 
} 