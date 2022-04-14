import { useLocation, Navigate, Outlet } from "react-router-dom";
import UseAuth from "./useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } : any = UseAuth();
    const location = useLocation();
    console.log(auth.userEmail, "userEmail passed to usecontext");
    
    return (
        
         auth?.userRole?.find(role => allowedRoles?.includes(role))
         ? <Outlet />
         : auth?.userRole
             ? <Navigate to="/unauthorized" state={{ from: location }} replace />
             : <Navigate to="/login" state={{ from: location }} replace />
 );
}

export default RequireAuth;
