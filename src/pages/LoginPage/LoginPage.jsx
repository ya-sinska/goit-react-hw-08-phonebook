import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import {RedisterForm,Box,TitleText, FormTitle, LogIcon, Fields, PasswordField, Btn, FormContainer} from '../RegisterPage/RegisterPage.styled'
import { SteledImage } from './LoginPage.styled';
import { useLoginPage } from 'hooks/useLoginPage';

export default function LoginPage () {
  const { email, showPassword, password, loading, handleChange, handleClickShowPassword, handleMouseDownPassword, handleSubmit } = useLoginPage();

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
        <Btn disabled={loading} variant="contained" type="submit">LogIn</Btn>
      </RedisterForm>
      </Box>
    </FormContainer>
  );
}