import { useState } from 'react';
import { useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { login} from 'redux/authOperations'; 
import {RedisterForm,Box,TitleText, FormTitle, LogIcon, Fields, PasswordField, Btn, FormContainer} from '../RegisterPage/RegisterPage.styled'
import { SteledImage } from './LoginPage.styled';
export const LoginPage = ()=>{
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
    
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
    const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({  email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <FormContainer>
      <SteledImage></SteledImage>
      <Box>
      <FormTitle>
        <LogIcon>
          <VpnKeyIcon/>
        </LogIcon>
        <TitleText>Log In</TitleText>
      </FormTitle>
      <RedisterForm onSubmit={handleSubmit} autoComplete="off">
          <Fields
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              multiline
              name="email"
              value={email}
              onChange={handleChange}/>
            <PasswordField sx={{ m: 1}} variant="outlined">
                <InputLabel htmlFor="password">Password</InputLabel>
                    <OutlinedInput
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        name="password"              
                        onChange={handleChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
              </PasswordField>
        <Btn variant="contained" type="submit">LogIn</Btn>
      </RedisterForm>
      </Box>
    </FormContainer>
  );
}