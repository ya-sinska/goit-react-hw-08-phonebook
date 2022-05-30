import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNavigation/AuthNavigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AppContainer, Bar } from './AppBar.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/authSlice';

export default function MenuAppBar () {
  const isLoggedIn = useSelector(getIsLoggedIn)
  
  return (
    <>
      <Bar position="static">
        <AppContainer>
          <Navigation/>
          {!isLoggedIn ? <AuthNav />:
          <UserMenu/>}
        </AppContainer>
      </Bar>
      <Outlet />
    </>

  );
}