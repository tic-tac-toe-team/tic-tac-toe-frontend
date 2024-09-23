import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
    return !!localStorage.getItem('ACCESS_TOKEN');
};

interface ProtectedRouteProps {
    element: React.JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
