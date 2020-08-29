import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../styles/colors';

const useStyles = makeStyles({
  iconWrapper: {
    padding: 20,
    marginRight: 15,
    float: 'left',
    marginTop: -30,
    borderRadius: 3,
  },
  icon: { '& > svg': { width: 40, height: 40, lineHeight: 40 } },
});

const AbsoluteIcon: FC<{ color: string; icon: React.ReactNode }> = ({
  color,
  icon,
}) => {
  const getBackgroundColor = (color: string) => {
    return color === 'Orange'
      ? colors.linearOrange
      : color === 'Green'
      ? colors.linearGreen
      : color === 'Red'
      ? colors.linearRed
      : colors.linearBlue;
  };
  const getShadowColor = (color: string) => {
    return color === 'Orange'
      ? colors.shadowOrange
      : color === 'Green'
      ? colors.shadowGreen
      : color === 'Red'
      ? colors.shadowRed
      : colors.shadowBlue;
  };

  const classes = useStyles();
  return (
    <div
      className={classes.iconWrapper}
      style={{
        background: getBackgroundColor(color),
        boxShadow: getShadowColor(color),
      }}
    >
      <span className={classes.icon}>{icon}</span>
    </div>
  );
};

export default AbsoluteIcon;
