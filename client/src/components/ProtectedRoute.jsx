import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  let isAuthenticated = window.localStorage.getItem("IS_AUTHENTICATED");
  return <>{isAuthenticated ? children : <Navigate to="/login"></Navigate>}</>;
};
export default ProtectedRoute;
