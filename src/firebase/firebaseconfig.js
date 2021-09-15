import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  aenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectstorage = firebase.storage();
const projectFirestore = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectstorage, projectFirestore, timestamp, auth, provider };
