import firebase from 'firebase'

let firebaseConfig = {
	apiKey: "AIzaSyDqDHF0T0Li8awcLzMmtY5YUBx2SDkL5Yg",
	authDomain: "leyton-tools.firebaseapp.com",
	databaseURL: "https://leyton-tools.firebaseio.com",
	projectId: "leyton-tools",
	storageBucket: "leyton-tools.appspot.com",
	messagingSenderId: "236515028641",
	appId: "1:236515028641:web:4f65ea3b5a4ea060cf8ae0"
};

firebase.initializeApp(firebaseConfig);

export default {
	database: firebase.database()
}
