import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDObE-jbF7ulteRJuo7dlUjryOFKCO79Lg',
  authDomain: 'netflix-clone-cc6de.firebaseapp.com',
  projectId: 'netflix-clone-cc6de',
  storageBucket: 'netflix-clone-cc6de.appspot.com',
  messagingSenderId: '1076048152713',
  appId: '1:1076048152713:web:563d7820b87fbc3452de58',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
