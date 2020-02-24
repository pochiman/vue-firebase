import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
	apiKey: "AIzaSyDJdM3DlbktgnAu0qxXAy5dzBR80V4xh_g",
	authDomain: "ninja-chat-f54f3.firebaseapp.com",
	databaseURL: "https://ninja-chat-f54f3.firebaseio.com",
	projectId: "ninja-chat-f54f3",
	storageBucket: "ninja-chat-f54f3.appspot.com",
	messagingSenderId: "799071977143"
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()