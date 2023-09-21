import * as React from "react";
import { Session } from '../../authentication/Session';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({
    token,
    redirectPath = '/login',
    children,
  }) => {
    debugger
    if (!Session.parseToken(token)) {
        debugger
      return <Navigate to={redirectPath} replace />;
    }
    return children;
  };


 