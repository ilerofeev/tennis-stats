import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Redirect, Switch, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ProtectedRoute from './ProtectedRoute';
import AuthPage from './AuthPage';

export const UserContext = React.createContext<{
  user: User;
  addUser: (userData: User) => void;
  removeUser: () => void;
}>({
  user: null,
  addUser: (userData) => {
    console.log('addUser');
  },
  removeUser: () => console.log('removeUser'),
});

export type User = 'admin' | 'guest' | null;

function App() {
  const [user, setUser] = useState<User>('guest');

  const removeUser = () => setUser(null);
  const addUser = (userData: User) => setUser(userData);

  return (
    <UserContext.Provider value={{ user, addUser, removeUser }}>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            user ? <Redirect to={'/main'} /> : <Redirect to={'/auth'} />
          }
        />
        <Route path="/auth" exact component={AuthPage} />
        <Sidebar>
          <ProtectedRoute path="/main" component={MainPage} user={user} />
        </Sidebar>
        <Redirect to={'/'} />
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
