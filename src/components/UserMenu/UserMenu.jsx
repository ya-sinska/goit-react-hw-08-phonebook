import AccountCircle from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/authOperations';
import { getUserName } from 'redux/authSlice';

export const UserMenu = () => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();
  return (
    <div>
      <AccountCircle />
      <span>{`Hello, ${name.toUpperCase()}`}</span>
      <button type="button" onClick={() => {dispatch(logout())}}>
        LogOut
      </button>
    </div>
  );
}