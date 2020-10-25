import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Redirect, Switch, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ProtectedRoute from './ProtectedRoute';
import AuthPage from './AuthPage';
import fire from '../config/firebase';

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
  const [user, setUser] = useState<User>(null);
  const [init, setInit] = useState(false);

  const removeUser = () => {
    setUser(null);
    fire.auth().signOut().then();
  };
  const addUser = (userData: User) => setUser(userData);

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email ? 'admin' : 'guest');
      }
      setInit(true);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, addUser, removeUser }}>
      {init && (
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
      )}
    </UserContext.Provider>
  );
}

export default App;
