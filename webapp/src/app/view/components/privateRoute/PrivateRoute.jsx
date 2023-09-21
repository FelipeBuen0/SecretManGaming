import * as React from "react";
import { Session } from '../../../services/Session';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({
    token,
    redirectPath = '/login',
    children,
  }) => {
    //Sistema de autenticação está fraco, precisa de melhorias
    if (!Session.parseToken(token)) {
      return <Navigate to={redirectPath} replace />;
    }
    return children;
  };


 