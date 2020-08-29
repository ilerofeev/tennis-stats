import React, { FC } from 'react';
import { Bar, HorizontalBar } from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../styles/colors';

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
    '& span:first-child': { color: colors.greenArrow },
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
    padding: '10px 15px',
    borderRadius: 3,
  },
  chartOrange: {
    boxShadow: colors.shadowOrange,
    background: colors.linearOrange,
  },
  chartBlue: {
    boxShadow: colors.shadowBlue,
    background: colors.linearBlue,
  },
});

const BarChart: FC<{
  title: string;
  horizontal?: boolean;
  color: 'Orange' | 'Blue';
  data: { labels: string[]; datasets: { data: number[] }[] };
}> = ({ horizontal, color, data, title }) => {
  const getAverageProfit = () => {
    const profitArray = data.datasets[0].data;
    return (
      Math.round(
        profitArray.reduce((sum, add) => sum + add) / profitArray.length
      ) + '%'
    );
  };
  const classes = useStyles();
  return (
    <div className={classes.chartWrapper}>
      <div className={classes.chartBlock}>
        <div
          className={[
            classes.chart,
            color === 'Orange' ? classes.chartOrange : classes.chartBlue,
          ].join(' ')}
        >
          {horizontal ? (
            <HorizontalBar
              data={data}
              options={{
                maintainAspectRatio: false,
                legend: { display: false },
              }}
            />
          ) : (
            <Bar
              data={data}
              options={{
                maintainAspectRatio: false,
                legend: { display: false },
              }}
            />
          )}
        </div>
        <div className={classes.chartTitle}>{title}</div>
        <span className={classes.chartDescription}>
          <span>{getAverageProfit()}</span>&nbsp;
          <span>on average</span>
        </span>
      </div>
    </div>
  );
};

export default BarChart;
