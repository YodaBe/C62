import firebase from "firebase"; 


const firebaseConfig = {
  apiKey: "AIzaSyCI6MHGdydOcUl2gVZqhgytxIVjRYIssiI",
  authDomain: "school-attendance-app-17079.firebaseapp.com",
  databaseURL: "https://school-attendance-app-17079-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-17079",
  storageBucket: "school-attendance-app-17079.appspot.com",
  messagingSenderId: "295123052007",
  appId: "1:295123052007:web:01317d4de8a468e1a7c942"
};

//initialize your database
  firebase.initializeApp(firebaseConfig)


  export default firebase.database()
 

  