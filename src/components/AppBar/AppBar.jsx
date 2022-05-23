import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNavigation/AuthNavigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AppContainer } from './AppBar.styled';

export const MenuAppBar =()=> {
  return (
    <>
      <AppBar position="static">
        <AppContainer>
          <Navigation/>
          <AuthNav />
          <UserMenu/>
        </AppContainer>
      </AppBar>
      <Outlet />
    </>

  );
}