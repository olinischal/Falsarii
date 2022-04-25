import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import Authenticate from "../../Context/Authenticate";


const RequireAuth = ({ allowedRoles }) => {
    const {auth} : any = useContext(Authenticate);
    const location = useLocation();
    console.log(auth?.res?.roles, "userEmail passed to usecontext");
    
    return (
        
         auth?.res?.roles?.find(role => allowedRoles?.includes(role))
         ? <Outlet />
         : auth?.res?.roles
             ? <Navigate to="/unauthorized" state={{ from: location }} replace />
             : <Navigate to="/login" state={{ from: location }} replace />
 );
}

export default RequireAuth;
