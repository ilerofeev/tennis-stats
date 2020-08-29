import React from 'react';
import Sidebar from './Sidebar';
import { Route, Redirect } from 'react-router-dom';
import MainPage from './MainPage';
import MonthStats from './MonthStats';

function App() {
  return (
    <Sidebar>
      <Route exact path="/main" component={MainPage} />
      <Route exact path="/stats" component={MonthStats} />
      <Redirect to={'/main'} />
    </Sidebar>
  );
}

export default App;
