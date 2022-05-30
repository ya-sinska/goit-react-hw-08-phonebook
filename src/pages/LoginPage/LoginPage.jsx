import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import {RedisterForm,Box,TitleText, FormTitle, LogIcon, Field, Btn, FormContainer} from '../RegisterPage/RegisterPage.styled'
import { SteledImage } from './LoginPage.styled';
import { useLoginPage } from 'hooks/useLoginPage';
import { Error } from 'components/Form/Form.styled';

const emailRegExp = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
const passwordRegExp = /^[^\s]+(?:$|.*[^\s]+$)/;
export default function LoginPage() {
  const {register, handleSubmit, errors, showPassword,  loading,  handleClickShowPassword, handleMouseDownPassword, onSubmit} = useLoginPage();

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
        <RedisterForm
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <Field sx={{ m: 1}} variant="outlined">
             <InputLabel htmlFor="email">Email</InputLabel>
                <OutlinedInput
                  {...register("email", {
                  required: "This is required",
                  pattern: {
                    value: emailRegExp,
                    message: "Use email correct format"
                  }
                  })}
                  id="email"
                  type='email'
                  defaultValue=""
                  label="Email"
                />
            </Field >          
            {errors.email&&<Error>{errors.email?.message }</Error> }
            <Field sx={{ m: 1}} variant="outlined">
                <InputLabel htmlFor="password">Password</InputLabel>
                      <OutlinedInput
              {...register("password", {
                required: "This is required",
                pattern: {
                    value: passwordRegExp,
                    message: "Can't use spaces"
                  }
              })}
                        id="password"
                        type={showPassword ? 'text' : 'password'} 
                        defaultValue=""
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
          </Field>
          {errors.password&&<Error>{errors.password?.message }</Error> }
        <Btn disabled={loading} variant="contained" type="submit">LogIn</Btn>
      </RedisterForm>
      </Box>
    </FormContainer>
  );
}