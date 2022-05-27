import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/authOperations';
import { getError, getLoading } from 'redux/authSlice';
import { errorRegistration } from 'utils/notification'; 
export const useLoginPage = () => {
  const dispatch = useDispatch();
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
    return{ email, showPassword, password, loading, handleChange, handleClickShowPassword, handleMouseDownPassword, handleSubmit}
}