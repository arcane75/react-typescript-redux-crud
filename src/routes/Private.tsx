import React from 'react';
import {Navigate, Route,RouteProps} from 'react-router-dom';

interface Props extends RouteProps {
    isAuth: boolean;
}

const Private = ({isAuth, ...routeProps}: Props) => {
    if(isAuth){
        return <Route {... routeProps} />
    }
    return <Navigate to="/login" />;
};

export default Private;