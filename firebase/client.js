import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBpezRq7FHV5muaaWboGeLn90n_HqbXHO0",
    authDomain: "twitter-clon-3eb67.firebaseapp.com",
    projectId: "twitter-clon-3eb67",
    storageBucket: "twitter-clon-3eb67.appspot.com",
    messagingSenderId: "779654879200",
    appId: "1:779654879200:web:ff8819b5a7d73e74debd85"
};

!firebase.apps.length &&
    firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export function getFirestore() {

    return firebase.firestore(
        firebase.app()
    )
    // return firebase.auth.GoogleAuthProvider(googleProvider)
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
