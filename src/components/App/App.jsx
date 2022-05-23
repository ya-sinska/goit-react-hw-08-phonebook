import { Routes, Route } from 'react-router-dom';
import { MenuAppBar } from "components/AppBar/AppBar";
import { HomePage } from 'pages/HomePage';
import { ContactsPage } from 'pages/ConpactsPage/ContactsPage';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';

export const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<MenuAppBar/>}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage/>} />
      </Route>
      <Route path="*" element={<div>No result</div>} />
    </Routes>
  ) 
}
