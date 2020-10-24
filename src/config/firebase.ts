import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAChwob9_iVCuALP3JN-ugKsz054vKXDjc',
  authDomain: 'tennis-stats-5d9e8.firebaseapp.com',
  databaseURL: 'https://tennis-stats-5d9e8.firebaseio.com',
  projectId: 'tennis-stats-5d9e8',
  storageBucket: 'tennis-stats-5d9e8.appspot.com',
  messagingSenderId: '1026197798212',
  appId: '1:1026197798212:web:8579e1a7d413f3bebbab11',
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
