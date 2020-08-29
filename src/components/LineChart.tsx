import React from 'react';
import { Line } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../styles/colors';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles({
  chartTitle: {
    fontWeight: 300,
    color: colors.colorPrimary,
    fontSize: 18,
    marginBottom: 5,
  },
  chartDescription: {
    fontSize: 14,
    color: colors.colorSecondary,
    margin: 0,
    display: 'flex',
    alignItems: 'flex-start',
    '& > svg': { color: `${colors.greenArrow} !important`, fontSize: 18 },
    '& > span:nth-child(2)': { color: colors.greenArrow },
  },
  chartWrapper: {
    minWidth: 280,
    width: '33%',
    padding: 15,
    marginBottom: 40,
  },
  chartBlock: {
    minHeight: 260,
    padding: 15,
    borderRadius: 3,
    backgroundColor: '#fff',
    boxShadow: colors.blockShadow,
  },
  chart: {
    height: 200,
    margin: '-35px 0 15px 0',
    boxShadow: colors.shadowGreen,
    background: colors.linearGreen,
    padding: '10px 15px',
    borderRadius: 3,
  },
});

function LineChart() {
  const data = {
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
  const classes = useStyles();
  return (
    <div className={classes.chartWrapper}>
      <div className={classes.chartBlock}>
        <div className={classes.chart}>
          <Line
            data={data}
            options={{
              maintainAspectRatio: false,
              legend: { display: false },
            }}
          />
        </div>
        <div className={classes.chartTitle}>Last month</div>
        <span className={classes.chartDescription}>
          <ArrowUpwardIcon /> <span>9% </span>&nbsp;
          <span>increase last 5 days</span>
        </span>
      </div>
    </div>
  );
}

export default LineChart;
