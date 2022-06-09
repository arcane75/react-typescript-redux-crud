import React, { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

interface Props {
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}

const PrivateRoute: React.FC<Props> = ({ setIsAuth }) => {
    const navigate = useNavigate();
    let location = useLocation();
    const handleLog = () => {
        setIsAuth(true);
        navigate(location);
    }
    return <button onClick={() => handleLog()}>Login</button>;
};

export default PrivateRoute;