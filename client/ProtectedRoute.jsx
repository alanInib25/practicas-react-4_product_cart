import { Outlet, Navigate } from "react-router-dom"

//contexto
import { useAuth } from "./src/contexts/AuthContext.jsx";

function ProtectedRoute() {
  const { isAuthenticate } = useAuth();

  if(!isAuthenticate) return <Navigate to="/login" replace/>

  return (
    <Outlet />
  );

}

export default ProtectedRoute;