import {  useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/authOperations'; 
import { getError, getLoading } from 'redux/authSlice';
import { errorRegistration } from 'utils/notification';
import { useForm } from "react-hook-form";

export const useRegisterPage = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const error = useSelector(getError);
  const loading = useSelector(getLoading);
  const { register:formRegister, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
            name:'',
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
  const onSubmit = async ({ name, email, password }) => {
    dispatch(register({ name, email, password })); 
    reset();
  };
    return {formRegister, handleSubmit, errors, showPassword, loading, onSubmit, handleClickShowPassword, handleMouseDownPassword}
}