import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDA7gg8W2skMlkLHnHo2H0dKbU3CZ8qXwc",
  authDomain: "photo-blog-c77c8.firebaseapp.com",
  projectId: "photo-blog-c77c8",
  storageBucket: "photo-blog-c77c8.appspot.com",
  messagingSenderId: "837986082491",
  appId: "1:837986082491:web:ec7b7c03add3c20eeed39e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };