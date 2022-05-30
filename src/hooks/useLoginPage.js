import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/authOperations';
import { getError, getLoading } from 'redux/authSlice';
import { errorRegistration } from 'utils/notification'; 
import { useForm } from "react-hook-form";

export const useLoginPage = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const error = useSelector(getError);
  const loading = useSelector(getLoading);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
            email:'',
            password:''
        }
  });
  
  useEffect(() => {
    if (error) {
      errorRegistration(error);
    };
  }, [error]);
  
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const onSubmit = ({ email, password }) => {
    dispatch(login({ email, password}));
    reset();

  };
  
  return {register, handleSubmit, errors, showPassword,  loading,  handleClickShowPassword, handleMouseDownPassword, onSubmit}
}