// import firebase from 'firebase'
import firebase from 'firebase/app'
// import firestore from 'firebase/firestore'
import 'firebase/firestore'
	
	// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD3CZoF0s1LjdC3QVOfmbEBL95zVRM-LTA",
    authDomain: "ninja-smoothies-d4143.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-d4143.firebaseio.com",
    projectId: "ninja-smoothies-d4143",
    storageBucket: "ninja-smoothies-d4143.appspot.com",
    messagingSenderId: "507199335035",
    appId: "1:507199335035:web:0018c1a1cf6c1e8fd490de"
  };
  // Initialize Firebase
	const firebaseApp = firebase.initializeApp(firebaseConfig);
	// firebaseApp.firestore().settings({ timestampsInSnapshots: true })
	
	// export firestore database
	export default firebaseApp.firestore()