import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LineChart from './LineChart';
import BarChart from './BarChart';
import colors from '../styles/colors';
import { Match } from '../types';

const useStyles = makeStyles({
  chartsBlock: {
    marginLeft: -10,
    marginRight: -10,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});

const ChartsBlock: FC<{ data: Match[] }> = ({ data }) => {
  const classes = useStyles();
  const monthsData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: colors.colorChart,
        borderColor: colors.colorChart,
        borderWidth: 1,
        data: [34, 23, 14, 42, 60, 39, 28],
      },
    ],
  };
  const sourcesData = {
    labels: ['WTA line', 'WTA live', 'EK free', 'EK paid', 'Basket line'],
    datasets: [
      {
        backgroundColor: colors.colorChart,
        borderColor: colors.colorChart,
        borderWidth: 1,
        data: [33, 32, 52, 34, 24],
      },
    ],
  };
  const monthData = {
    labels: ['1', '5', '10', '15', '20', '25', '30'],
    datasets: [
      {
        label: '',
        fill: false,
        lineTension: 0.3,
        borderColor: colors.colorChart,
        pointBackgroundColor: '#fff',
        pointRadius: 4,
        pointHitRadius: 0,
        data: [5, 13, 10, 17, 29, 25, 34],
      },
    ],
  };
  return (
    <div className={classes.chartsBlock}>
      <BarChart title={'Last 7 months'} color={'Orange'} data={monthsData} />
      <LineChart data={monthData} />
      <BarChart
        title={'Last month'}
        color={'Blue'}
        horizontal={true}
        data={sourcesData}
      />
    </div>
  );
};

export default ChartsBlock;
