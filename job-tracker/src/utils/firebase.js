// firebase.js
import firebase from "firebase/app";
import "firebase/database";
import apiKey from "./apiKey";

// Initialize Firebase
// USE YOUR CONFIG OBJECT
const config = {
  apiKey: apiKey,
  authDomain: "job-tracker-583bb.firebaseapp.com",
  databaseURL: "https://job-tracker-583bb.firebaseio.com",
  projectId: "job-tracker-583bb",
  storageBucket: "job-tracker-583bb.appspot.com",
  messagingSenderId: "169142599458",
  appId: "1:169142599458:web:d03363f923216715062f7b",
  measurementId: "G-MECWD8MS28",
};
firebase.initializeApp(config);

// this exports the CONFIGURED version of firebase
export default firebase;
