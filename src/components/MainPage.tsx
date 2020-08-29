import React from 'react';
import commonStyles from '../styles/commonStyles';
import CardsBlock from './CardsBlock';
import ChartsBlock from './ChartsBlock';

function MainPage() {
  const commonClasses = commonStyles();
  return (
    <>
      <div className={commonClasses.pageTitle}>Statistics</div>
      <CardsBlock />
      <ChartsBlock />
    </>
  );
}

export default MainPage;
