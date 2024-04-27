
// note - did not get as far as running this . it also needs config to work

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js';
import { getFirestore, doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyD1j1JxchDa4kCjIVxKPpZTFZDc9a084fw",
  authDomain: "half-now.firebaseapp.com",
  databaseURL: "https://half-now-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "half-now",
  storageBucket: "half-now.appspot.com",
  messagingSenderId: "1022216288188",
  appId: "1:1022216288188:web:fbf335e1f0918eb1345db9",
  measurementId: "G-04C5HYLHKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const docRef = doc(db, "price_history", "track2");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
