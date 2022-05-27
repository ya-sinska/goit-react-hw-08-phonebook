import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/authOperations';
import { getUserName } from 'redux/authSlice';
import { Box, Image, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();
 
  return (
    <Box>
      <Image>
        <AccountCircle />
      </Image>
      <UserName>{`Hello, ${name.toUpperCase()}`}</UserName>
      <Button variant="contained" type="button" onClick={() => {dispatch(logout())}}>
        LogOut
      </Button>
    </Box>
  );
}