import firebase from "firebase/app";
import "firebase/auth";
import permissions from "./secrets";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: permissions.FIREBASE_API_KEY,
  authDomain: permissions.FIREBASE_AUTH_DOMAIN,
  databaseURL: permissions.FIREBASE_DATABASE_URL,
  projectId: permissions.FIREBASE_PROJECT_ID,
  storageBucket: permissions.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: permissions.FIREBASE_MESSAGING_SENDER_ID,
  appId: permissions.FIREBASE_APP_ID,
  measurementId: permissions.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

export default firebase;
