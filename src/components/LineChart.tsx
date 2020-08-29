import React, { FC } from 'react';
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

const LineChart: FC<{
  data: { labels: string[]; datasets: { data: number[] }[] };
}> = ({ data }) => {
  const classes = useStyles();
  const profitNumbers = data.datasets[0].data;
  const lastProfit = profitNumbers[profitNumbers.length - 1];
  const penultProfit = profitNumbers[profitNumbers.length - 2];
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
          <ArrowUpwardIcon />{' '}
          <span> {Math.abs(lastProfit - penultProfit)}% </span>
          &nbsp;
          <span>
            {lastProfit === penultProfit
              ? ''
              : lastProfit > penultProfit
              ? 'increase'
              : 'decrease'}{' '}
            last&nbsp;
            {+data.labels[data.labels.length - 1] -
              +data.labels[data.labels.length - 2]}{' '}
            days
          </span>
        </span>
      </div>
    </div>
  );
};

export default LineChart;
