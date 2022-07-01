import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDxlS9W232QmGoMMpPiUBMp6HJK_dZlLps",
  authDomain: "grifa-es-la-mas-hermosa.firebaseapp.com",
  databaseURL: "https://grifa-es-la-mas-hermosa-default-rtdb.firebaseio.com",
  projectId: "grifa-es-la-mas-hermosa",
  storageBucket: "grifa-es-la-mas-hermosa.appspot.com",
  messagingSenderId: "163989693189",
  appId: "1:163989693189:web:eb27be122d23713f8f4d6c",
  measurementId: "G-9LPWY4P63S"
};
// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
