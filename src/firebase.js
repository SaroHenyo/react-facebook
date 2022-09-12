import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBQxX704WP-TxZ3_f8qftPYP1p6rPQQT2U',
  authDomain: 'react-facebook-4240a.firebaseapp.com',
  projectId: 'react-facebook-4240a',
  storageBucket: 'react-facebook-4240a.appspot.com',
  messagingSenderId: '818622253007',
  appId: '1:818622253007:web:a9d978ecc8eef54ef6f4ba',
}

// Use this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig)

// Use these for db, auth & provider
const db = firebaseapp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.FacebookAuthProvider()
const storage = firebase.storage()

export { db, auth, provider, storage }
