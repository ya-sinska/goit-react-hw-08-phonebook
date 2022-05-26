import {  useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { register } from 'redux/authOperations'; 
import {RedisterForm,Box,SteledImage,TitleText, FormTitle, LogIcon, Fields, PasswordField, Btn, FormContainer} from './RegisterPage.styled'
import { getError, getLoading } from 'redux/authSlice';
import { errorRegistration } from 'utils/notification';


export default function RegisterPage () {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const error = useSelector(getError);
  const loading = useSelector(getLoading);

  useEffect(() => {
      console.log(error)
    if (error !== null) {
      errorRegistration(error);
    };
      
  }, [error]);
  
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
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
        <TitleText>Let's start registration</TitleText>
      </FormTitle>
      <RedisterForm onSubmit={handleSubmit} autoComplete="off">
          <Fields 
            id="name"
            label="Name"
            variant="outlined"
            type="text"
            multiline
            name="name"
            value={name}
            onChange={handleChange} />
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
        <Btn disabled={loading} variant="contained" type="submit">Register</Btn>
      </RedisterForm>
      </Box>
    </FormContainer>
  );
}