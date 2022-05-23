import AccountCircle from '@mui/icons-material/AccountCircle';
export const UserMenu = () => {
  return (
    <div>
      <AccountCircle />
      <span>Hello, user</span>
      <button type="button" onClick={() => {}}>
        LogOut
      </button>
    </div>
  );
}