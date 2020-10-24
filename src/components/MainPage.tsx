import React, { useContext } from 'react';
import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import InfoPage from './InfoPage';
import MonthStats from './MonthStats';
import { UserContext } from './App';

const MainPage = () => {
  const match = useRouteMatch();
  const { user } = useContext(UserContext);

  return (
    <Switch>
      <Route
        path={`${match.path}`}
        exact
        render={() => <Redirect to={`${match.path}/info`} />}
      />
      <ProtectedRoute
        exact
        path={`${match.path}/info`}
        component={InfoPage}
        user={user}
      />
      <ProtectedRoute
        exact
        path={`${match.path}/stats`}
        component={MonthStats}
        user={user}
        adminProtect
      />
      <Redirect to={`${match.path}`} />
    </Switch>
  );
};

export default MainPage;
