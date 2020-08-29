import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AbsoluteIcon from './AbsoluteIcon';
import { Divider } from '@material-ui/core';
import colors from '../styles/colors';

const useStyles = makeStyles({
  cardWrapper: { padding: 10 },
  card: {
    display: 'block',
    backgroundColor: '#fff',
    minWidth: 250,
    width: 'calc(25% - 30px)',
    borderRadius: 3,
    boxShadow: colors.blockShadow,
    padding: 15,
    marginBottom: 40,
  },
  infoTitle: {
    textAlign: 'right',
    margin: 0,
    color: colors.colorSecondary,
  },
  infoDescription: {
    textAlign: 'right',
    margin: '0 0 20px 0',
    color: colors.colorPrimary,
    fontSize: '1.825em',
    fontWeight: 300,
  },
  hint: {
    marginTop: 15,
    fontSize: 12,
    color: colors.colorSecondary,
  },
  divider: {
    backgroundColor: colors.colorBackground,
  },
});

const InfoCard: FC<{
  color: 'Orange' | 'Green' | 'Red' | 'Blue';
  icon: React.ReactNode;
  data: { title: string; description: string; hint: string };
}> = ({ color, icon, data }) => {
  const classes = useStyles();
  return (
    <div className={classes.cardWrapper}>
      <div className={classes.card}>
        <AbsoluteIcon color={color} icon={icon} />
        <p className={classes.infoTitle}>{data.title}</p>
        <h3 className={classes.infoDescription}>{data.description}</h3>{' '}
        <Divider className={classes.divider} />
        <div className={classes.hint}>{data.hint}</div>
      </div>
    </div>
  );
};

export default InfoCard;
