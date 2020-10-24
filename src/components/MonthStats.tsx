import React from 'react';
import { commonStyles } from '../styles/commonStyles';

function MonthStats() {
  const commonClasses = commonStyles();
  return <div className={commonClasses.pageTitle}>Month stats</div>;
}

export default MonthStats;
