import {  useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/authOperations'; 
import { getError, getLoading } from 'redux/authSlice';
import { errorRegistration } from 'utils/notification';


export const useRegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const error = useSelector(getError);
  const loading = useSelector(getLoading);

  useEffect(() => {
    if (error) {
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
    return {name, email, password, showPassword, loading, handleSubmit, handleClickShowPassword, handleMouseDownPassword, handleChange}
}