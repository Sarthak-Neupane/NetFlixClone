import * as firebase from "firebase/app";
import "firebase/auth";

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyC82icMDSAeleMuNh3oJs-rH0dRDUb55JQ",
  authDomain: "netflixclonefirst.firebaseapp.com",
  databaseURL: "https://netflixclonefirst-default-rtdb.firebaseio.com",
  projectId: "netflixclonefirst",
  storageBucket: "netflixclonefirst.appspot.com",
  messagingSenderId: "865188090238",
  appId: "1:865188090238:web:c697bc7b0ef74c4c01e32f",
};

firebase.initializeApp(firebaseConfig);

// utils
const auth = firebase.auth();

// export utils/refs
export { auth };
