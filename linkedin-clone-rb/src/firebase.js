import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBBFskfD92sI2LdPnBuzAamK4W22FgMBbA",
    authDomain: "linkedin-clone-b348b.firebaseapp.com",
    projectId: "linkedin-clone-b348b",
    storageBucket: "linkedin-clone-b348b.appspot.com",
    messagingSenderId: "636803072230",
    appId: "1:636803072230:web:1c086949c26420977ebb27",
    measurementId: "G-V3H5JPWFN8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db , auth };