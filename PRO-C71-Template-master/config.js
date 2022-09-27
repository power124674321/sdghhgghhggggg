import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBbZ4YlRnbZ4r4AXx14DbQ-rfnc2oz4s5U",
    authDomain: "idnjuehdirjhsiidnu.firebaseapp.com",
    projectId: "idnjuehdirjhsiidnu",
    storageBucket: "idnjuehdirjhsiidnu.appspot.com",
    messagingSenderId: "185847285837",
    appId: "1:185847285837:web:60ef1c75142b8326fbf404"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
