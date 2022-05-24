import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNavigation/AuthNavigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AppContainer } from './AppBar.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/authSlice';

export const MenuAppBar = () => {
  const isLoggedIn =useSelector(getIsLoggedIn)
  return (
    <>
      <AppBar position="static">
        <AppContainer>
          <Navigation/>
          {!isLoggedIn ? <AuthNav />:
          <UserMenu/>}
        </AppContainer>
      </AppBar>
      <Outlet />
    </>

  );
}