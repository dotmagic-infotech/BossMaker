import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AccessDenied from '../pages/AccessDenied';


const ProtectedRoutes = ({ allowedRoles }) => {
    const { role } = useAuth();
    return allowedRoles.includes(role) ? <Outlet /> : <AccessDenied />;
};

export default ProtectedRoutes;
