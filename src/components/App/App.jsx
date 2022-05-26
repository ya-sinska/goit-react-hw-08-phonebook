import { Routes, Route } from 'react-router-dom';
import { MenuAppBar } from "components/AppBar/AppBar";
import { HomePage } from 'pages/HomePage';
import { ContactsPage } from 'pages/ConpactsPage/ContactsPage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/authOperations';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivatRoute from 'components/PrivatRoute/PrivatRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import { getIsRefreshing } from 'redux/authSlice';
export const App = () => {
  const dispatch = useDispatch();
  const IsRefreshing = useSelector(getIsRefreshing)
  useEffect(() => {
    dispatch(refreshUser());
  },[dispatch])
  
  return (
    !IsRefreshing && (
      <>
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<MenuAppBar/>}>
            <Route index element={<HomePage />} />
            <Route path="contacts" element={<PrivatRoute>{<ContactsPage />}</PrivatRoute> } />
            <Route path="register" element={<PublicRoute restricted>{<RegisterPage />}</PublicRoute>} />
            <Route path="login" element={<PublicRoute restricted>{<LoginPage/>}</PublicRoute>}/>
          </Route>
          <Route path="*" element={<div>No result</div>} />
        </Routes>
      </>
    )
    
  ) 
}
