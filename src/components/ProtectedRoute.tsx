import { Redirect, Route } from 'react-router-dom';
import React, { ComponentType, FC } from 'react';

const ProtectedRoute: FC<{
  component: ComponentType<any>;
  path: string;
  exact?: boolean;
  user: string | null;
  adminProtect?: boolean;
}> = ({ component: Component, path, exact = false, user, adminProtect }) => {
  const isAvailable = () => {
    if (!user) return false;
    else {
      if (adminProtect !== undefined) return user === 'admin';
    }
    return true;
  };
  return isAvailable() ? (
    <Route path={path} component={Component} exact={exact} />
  ) : (
    <Redirect to={'/'} />
  );
};

export default ProtectedRoute;
