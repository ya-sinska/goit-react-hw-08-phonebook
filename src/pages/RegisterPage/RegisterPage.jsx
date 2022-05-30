import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import {RedisterForm,Box,SteledImage,TitleText, FormTitle, LogIcon, Field, Btn, FormContainer} from './RegisterPage.styled'
import { useRegisterPage } from 'hooks/useRegisterPage';
import { Error } from 'components/Form/Form.styled';

const emailRegExp = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;

export default function RegisterPage() {
  const {formRegister, handleSubmit, errors, showPassword, loading, onSubmit, handleClickShowPassword, handleMouseDownPassword} = useRegisterPage();
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
      <RedisterForm onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Field sx={{ m: 1}} variant="outlined">
             <InputLabel htmlFor="name">Name</InputLabel>
                <OutlinedInput
                 {...formRegister("name", {
                  required: "This is required",
                 })}
                  id="name"
                  type='text'
                  defaultValue=""
                  label="Name"
                />
            </Field > 
          {errors.name&&<Error>{errors.name?.message }</Error> }
          <Field sx={{ m: 1}} variant="outlined">
             <InputLabel htmlFor="email">Email</InputLabel>
                <OutlinedInput
                  {...formRegister("email", {
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
                        {...formRegister("password", { required:"This is required"})}
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
        <Btn disabled={loading} variant="contained" type="submit">Register</Btn>
      </RedisterForm>
      </Box>
    </FormContainer>
  );
}