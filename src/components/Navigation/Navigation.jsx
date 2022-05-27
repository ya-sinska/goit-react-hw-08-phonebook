import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/authSlice';
import { Link, NavigationList } from 'components/AuthNavigation/AuthNavigation.styled';
export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn)
 return (
  <NavigationList>
    <Link to="/">
      Home
    </Link>

    {isLoggedIn&&<Link
      to="/contacts"
    >
      Contacts
    </Link>}
  </NavigationList>
); 
} 