// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from"firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAZNszjOSbP-STRm3bgKirbPS962WidrXA",
    authDomain: "chatroom-7f50d.firebaseapp.com",
    projectId: "chatroom-7f50d",
    storageBucket: "chatroom-7f50d.appspot.com",
    messagingSenderId: "142456148513",
    appId: "1:142456148513:web:cb7512d3dc84792c5f8960",
    measurementId: "G-8Q0PXMZ6H8"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default  db;