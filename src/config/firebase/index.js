import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBtCW7apEFtaAnTp2tyqCkPgNCb3275YLE",
  authDomain: "sisoja-wo.firebaseapp.com",
  projectId: "sisoja-wo",
  storageBucket: "sisoja-wo.appspot.com",
  messagingSenderId: "450529785388",
  appId: "1:450529785388:web:1aba86569ea35baa920389"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
