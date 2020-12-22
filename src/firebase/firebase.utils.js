import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyCefUZvNQveXXjRqkp3ST00fnrSbSla_40",
        authDomain: "crwn-db-68cd8.firebaseapp.com",
        projectId: "crwn-db-68cd8",
        storageBucket: "crwn-db-68cd8.appspot.com",
        messagingSenderId: "866580345108",
        appId: "1:866580345108:web:595269a695051cca1c1201",
        measurementId: "G-FLD9DNXQY3"
      
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
