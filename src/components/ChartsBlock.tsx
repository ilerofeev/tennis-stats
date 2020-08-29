import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LineChart from './LineChart';
import BarChart from './BarChart';
import colors from '../styles/colors';

const useStyles = makeStyles({
  chartsBlock: {
    marginLeft: -10,
    marginRight: -10,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});

function ChartsBlock() {
  const classes = useStyles();
  const mounthsData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: colors.colorChart,
        borderColor: colors.colorChart,
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 53],
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
  return (
    <div className={classes.chartsBlock}>
      <BarChart color={'Orange'} data={mounthsData} />
      <LineChart />
      <BarChart color={'Blue'} horizontal={true} data={sourcesData} />
    </div>
  );
}

export default ChartsBlock;
