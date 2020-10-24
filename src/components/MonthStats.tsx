import React, { useEffect, useState } from 'react';
import { commonStyles } from '../styles/commonStyles';
import fire from '../config/firebase';

function MonthStats() {
  const commonClasses = commonStyles();

  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const signIn = () =>
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('success login');
      })
      .catch((error) => console.log(error));

  const signOut = () => fire.auth().signOut();

  return (
    <div>
      <div className={commonClasses.pageTitle}>Month stats</div>
      <input
        type="text"
        value={email}
        placeholder={'email'}
        onChange={(e) => setEmail(e.target.value)}
      />{' '}
      <br />
      <input
        type="password"
        value={password}
        placeholder={'password'}
        onChange={(e) => setPassword(e.target.value)}
      />{' '}
      <br />
      <button onClick={signIn}>LOGIN</button>
    </div>
  );
}

export default MonthStats;
