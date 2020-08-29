import InfoCard from './InfoCard';
import VerticalAlignCenterIcon from '@material-ui/icons/VerticalAlignCenter';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../styles/theme';
import { Match } from '../types';

const useStyles = makeStyles({
  cardsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'space-between',
    },
  },
});

const CardsBlock: FC<{ data: Match[] }> = ({ data }) => {
  const classes = useStyles();
  const getAverageCoefficient = () =>
    (data.map((el) => el.odds).reduce((sum, add) => sum + add) / data.length)
      .toFixed(2)
      .toString();
  const getWinPercentage = () => {
    const matchesWithoutReturn = data.filter((el) => el.result !== 'return');
    return (
      (data.filter((el) => el.result === 'win').length /
        matchesWithoutReturn.length) *
        100 +
      '%'
    );
  };
  const getROI = () => {
    const winMatches = data.filter((el) => el.result === 'win');
    const winMatchesOdds = winMatches.map((el) => el.odds);
    const profit = winMatchesOdds.reduce((sum, add) => sum + add);
    const notReturnMatchesCount = data.filter((el) => el.result !== 'return')
      .length;
    return (
      Math.round(
        ((profit - notReturnMatchesCount) / notReturnMatchesCount) * 100
      ) + '%'
    );
  };
  const betSizeDoll = 100;
  const countOfBets = data.length;
  const getProfit = () => {
    const winMatchesCount = data.filter((el) => el.result === 'win').length;
    const profit =
      ((winMatchesCount * +getROI().slice(0, 2)) / 100) * betSizeDoll;
    return profit.toString() + '$';
  };

  return (
    <>
      <div className={classes.cardsWrapper}>
        <InfoCard
          data={{
            title: 'Average coefficient',
            description: getAverageCoefficient(),
            hint: `Last ${countOfBets} bets`,
          }}
          color={'Orange'}
          icon={<VerticalAlignCenterIcon />}
        />
        <InfoCard
          data={{
            title: 'Profit',
            description: getProfit(),
            hint: `Last ${countOfBets} bets, flat ${betSizeDoll}$`,
          }}
          color={'Green'}
          icon={<AttachMoneyIcon />}
        />
        <InfoCard
          data={{
            title: 'Win',
            description: getWinPercentage(),
            hint: `Last ${countOfBets} bets`,
          }}
          color={'Blue'}
          icon={<CheckBoxIcon />}
        />
        <InfoCard
          data={{
            title: 'ROI',
            description: getROI(),
            hint: `Last ${countOfBets} bets`,
          }}
          color={'Red'}
          icon={<BusinessCenterIcon />}
        />
      </div>
    </>
  );
};

export default CardsBlock;
