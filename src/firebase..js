import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyDfuAyQ8F95ohtliNH7pWodaQzUMITrX00",
  authDomain: "fishfarm-3a61b.firebaseapp.com",
  databaseURL: "https://fishfarm-3a61b.firebaseio.com",
  projectId: "fishfarm-3a61b",
  storageBucket: "fishfarm-3a61b.appspot.com",
  messagingSenderId: "569506625605"
}
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const fishfarmRef = databaseRef.child("fishfarm")