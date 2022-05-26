import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "redux/authSlice";

export default function PrivatRoute({ children}) {
    const isLoggedIn = useSelector(getIsLoggedIn);
    if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
    return children;
    
}