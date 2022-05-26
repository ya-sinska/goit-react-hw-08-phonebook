import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/authOperations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader/Loader';
import PrivatRoute from 'components/PrivatRoute/PrivatRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import { getIsRefreshing } from 'redux/authSlice';

const HomePage = lazy(() => import('pages/HomePage/HomePage' /* webpackChunkName: "HomePage"*/));
const ContactsPage  = lazy(() => import('pages/ConpactsPage/ContactsPage' /* webpackChunkName: "ContactsPage"*/));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage' /* webpackChunkName: "RegisterPage"*/));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage' /* webpackChunkName: "LoginPage"*/));
const MenuAppBar = lazy(() => import('components/AppBar/AppBar' /* webpackChunkName: "HomePage"*/));

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
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/" element={<MenuAppBar/>}>
              <Route index element={<HomePage />} />
              <Route path="contacts" element={<PrivatRoute>{<ContactsPage />}</PrivatRoute> } />
              <Route path="register" element={<PublicRoute restricted>{<RegisterPage />}</PublicRoute>} />
              <Route path="login" element={<PublicRoute restricted>{<LoginPage/>}</PublicRoute>}/>
            </Route>
            <Route path="*" element={<div>No result</div>} />
          </Routes>
        </Suspense>
      </>
    )
    
  ) 
}
