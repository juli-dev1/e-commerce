import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"


const config = {
    apiKey: "AIzaSyCu41ANSTa7hDNt1vt4dOgf90S4cA0PDHE",
    authDomain: "crwn-db-3242a.firebaseapp.com",
    projectId: "crwn-db-3242a",
    storageBucket: "crwn-db-3242a.appspot.com",
    messagingSenderId: "324401429760",
    appId: "1:324401429760:web:4979149fecc940dba507e5",
    measurementId: "G-FV10VLG0WZ"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await  userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(err){
        console.log('error creating user', err.message);
      }
    }


    return userRef;
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({
    'prompt': 'select_account'
  });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  
