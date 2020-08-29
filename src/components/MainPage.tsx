import React, { useState } from 'react';
import { commonStyles } from '../styles/commonStyles';
import CardsBlock from './CardsBlock';
import ChartsBlock from './ChartsBlock';
import { bet, Match, result, source } from '../types';

function MainPage() {
  const commonClasses = commonStyles();
  const [matches] = useState<Match[]>([
    {
      id: 1,
      date: '02.08.20',
      bet: bet.win,
      odds: 1.78,
      source: source.wtaline,
      result: result.win,
    },
    {
      id: 2,
      date: '07.08.20',
      bet: bet.win,
      odds: 1.56,
      source: source.wtalive,
      result: result.win,
    },
    {
      id: 3,
      date: '12.08.20',
      bet: bet.fav,
      odds: 1.69,
      source: source.ekfree,
      result: result.return,
    },
    {
      id: 4,
      date: '17.08.20',
      bet: bet.fav,
      odds: 2.1,
      source: source.ekpaid,
      result: result.lose,
    },
    {
      id: 5,
      date: '23.08.20',
      bet: bet.out,
      odds: 1.73,
      source: source.basketline,
      result: result.win,
    },
    {
      id: 6,
      date: '28.08.20',
      bet: bet.fav,
      odds: 1.83,
      source: source.wtaline,
      result: result.win,
    },
  ]);
  return (
    <>
      <div className={commonClasses.pageTitle}>Statistics</div>
      <CardsBlock data={matches} />
      <ChartsBlock data={matches} />
    </>
  );
}

export default MainPage;
