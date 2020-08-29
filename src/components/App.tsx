import React from 'react';
import Sidebar from './Sidebar';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../styles/colors';
import InfoCard from './InfoCard';
import VerticalAlignCenterIcon from '@material-ui/icons/VerticalAlignCenter';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

const useStyles = makeStyles({
  title: {
    fontSize: 18,
    color: colors.colorPrimary,
    fontWeight: 300,
    marginBottom: 50,
  },
  cardsWrapper: { display: 'flex' },
});

function App() {
  const classes = useStyles();
  return (
    <Sidebar>
      <div className={classes.title}>Statistics</div>
      <div className={classes.cardsWrapper}>
        <InfoCard
          data={{
            title: 'Average coefficient',
            description: '1.78',
            hint: 'This year',
          }}
          color={'Orange'}
          icon={<VerticalAlignCenterIcon />}
        />
        <InfoCard
          data={{
            title: 'Profit',
            description: '538$',
            hint: 'This year, flat 5%',
          }}
          color={'Green'}
          icon={<AttachMoneyIcon />}
        />
        <InfoCard
          data={{
            title: 'Win',
            description: '67%',
            hint: 'This year',
          }}
          color={'Red'}
          icon={<CheckBoxIcon />}
        />
        <InfoCard
          data={{
            title: 'ROI',
            description: '23%',
            hint: 'This year',
          }}
          color={'Blue'}
          icon={<BusinessCenterIcon />}
        />
      </div>
    </Sidebar>
  );
}

export default App;
