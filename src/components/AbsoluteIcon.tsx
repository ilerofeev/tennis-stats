import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import colors from '../styles/colors';

const useStyles = makeStyles({
  iconWrapper: {
    padding: 20,
    marginRight: 15,
    float: 'left',
    marginTop: -30,
    borderRadius: 3,
  },
  orangeWrapper: {
    background: colors.linearOrange,
    boxShadow: colors.shadowOrange,
  },
  greenWrapper: {
    background: colors.linearGreen,
    boxShadow: colors.shadowGreen,
  },
  redWrapper: {
    background: colors.linearRed,
    boxShadow: colors.shadowRed,
  },
  blueWrapper: {
    background: colors.linearBlue,
    boxShadow: colors.shadowBlue,
  },
  icon: { '& > svg': { width: 40, height: 40, lineHeight: 40 } },
});

const AbsoluteIcon: FC<{ color: string; icon: React.ReactNode }> = ({
  color,
  icon,
}) => {
  const classes = useStyles();
  return (
    <div
      className={[
        classes.iconWrapper,
        color === 'Orange'
          ? classes.orangeWrapper
          : color === 'Green'
          ? classes.greenWrapper
          : color === 'Red'
          ? classes.redWrapper
          : classes.blueWrapper,
      ].join(' ')}
    >
      <span className={classes.icon}>{icon}</span>
    </div>
  );
};

export default AbsoluteIcon;
