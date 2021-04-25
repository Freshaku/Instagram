import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCCfwVPyIubOuKiLQiL8iiu92T1kW1-btM",
  authDomain: "instagram-1d845.firebaseapp.com",
  projectId: "instagram-1d845",
  storageBucket: "instagram-1d845.appspot.com",
  messagingSenderId: "484510728434",
  appId: "1:484510728434:web:cc4847096b07cbbfa6506b"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
