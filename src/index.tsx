import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// нужно 1 выбор месяца и года 2 в зависимости от выбранного периода
// подробная общая статистика а также краткая статистика профита по разным
// видам ставок. т.е разные стратегии разные форматы (вта и атп) по каждой
// кратко 3 график прибыли по выбранному ранее периоду 4 таблица всех
// загруженных прогнозов 5 статистика по месяцам подробная как впрогнозе

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
