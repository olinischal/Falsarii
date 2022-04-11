import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } : any = useAuth();
    const location = useLocation();

    return (
        
         auth?.userRole?.find(role => allowedRoles?.includes(role))
         ? <Outlet />
         : auth?.userRole
             ? <Navigate to="/unauthorized" state={{ from: location }} replace />
             : <Navigate to="/login" state={{ from: location }} replace />
 );
}

export default RequireAuth;
