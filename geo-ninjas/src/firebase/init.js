import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
	apiKey: "AIzaSyDMMpnvykFy42YrReQ6wc_3kyyMARlfGlI",
	authDomain: "geo-ninjas-ac27c.firebaseapp.com",
	databaseURL: "https://geo-ninjas-ac27c.firebaseio.com",
	projectId: "geo-ninjas-ac27c",
	storageBucket: "geo-ninjas-ac27c.appspot.com",
	messagingSenderId: "482605596846"
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()