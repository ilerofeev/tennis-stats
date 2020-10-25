import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import backgroundImage from '../images/login-background.jpg';
import fire from '../config/firebase';
import { UserContext } from './App';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'right',
  },
  requiredWarning: {
    color: '#f44336',
    margin: '4px 0 0 0',
    fontSize: '0.75rem',
    letterSpacing: '0.03333em',
    lineHeight: '1.66',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AuthPage() {
  const classes = useStyles();
  const [error, setError] = useState('');

  const { user } = useContext(UserContext);

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user !== null) history.push('/main');
  }, [user, history]);

  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === '' || email === '') setError('Email or password is empty');
    else
      fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then()
        .catch((err) => setError(err.message));
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        className={classes.formWrapper}
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={signIn}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className={classes.requiredWarning}>{error}</p>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={() => {
                fire
                  .auth()
                  .signInAnonymously()
                  .then()
                  .catch((err) => setError(err.message));
              }}
            >
              Sign in as guest
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
