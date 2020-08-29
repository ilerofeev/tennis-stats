import InfoCard from './InfoCard';
import VerticalAlignCenterIcon from '@material-ui/icons/VerticalAlignCenter';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../styles/theme';

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

function CardsBlock() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.cardsWrapper}>
        <InfoCard
          data={{
            title: 'Average coefficient',
            description: '1.78',
            hint: 'Last 6 months',
          }}
          color={'Orange'}
          icon={<VerticalAlignCenterIcon />}
        />
        <InfoCard
          data={{
            title: 'Profit',
            description: '538$',
            hint: 'Last 6 months, flat 30$',
          }}
          color={'Green'}
          icon={<AttachMoneyIcon />}
        />
        <InfoCard
          data={{
            title: 'Win',
            description: '67%',
            hint: 'Last 6 months',
          }}
          color={'Blue'}
          icon={<CheckBoxIcon />}
        />
        <InfoCard
          data={{
            title: 'ROI',
            description: `${Math.floor((1.78 - 1) * 67 - (100 - 67))}%`,
            hint: 'Last 6 months',
          }}
          color={'Red'}
          icon={<BusinessCenterIcon />}
        />
      </div>
    </>
  );
}

export default CardsBlock;
