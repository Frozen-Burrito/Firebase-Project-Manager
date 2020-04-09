// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA1qSshrj-D5OeMMI33WBYmxZXqnvXEeSo",
    authDomain: "projectmanager-624eb.firebaseapp.com",
    databaseURL: "https://projectmanager-624eb.firebaseio.com",
    projectId: "projectmanager-624eb",
    storageBucket: "projectmanager-624eb.appspot.com",
    messagingSenderId: "1023357905500",
    appId: "1:1023357905500:web:24b5dba3982e391a769499"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let firestore = firebase.firestore();