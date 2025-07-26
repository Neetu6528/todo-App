import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBQ1jsT0ZfAVm3bn3Ybte6iS-yJeKlhF0E",
    authDomain: "todo-app-817a0.firebaseapp.com",
    databaseURL: "https://todo-app-817a0.firebaseio.com",
    projectId: "todo-app-817a0",
    storageBucket: "todo-app-817a0.appspot.com",
    messagingSenderId: "915529430894",
    appId: "1:915529430894:web:61c76a783980070c5ab37f"
});

const db = firebaseApp.firestore();

export default db;