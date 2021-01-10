import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAdHYs6llyJNv73jmH7yzhOL7dvNk51cJw",
    authDomain: "eshop-proyecto.firebaseapp.com",
    projectId: "eshop-proyecto",
    storageBucket: "eshop-proyecto.appspot.com",
    messagingSenderId: "456403968794",
    appId: "1:456403968794:web:cd3645da5d87f2fc2242a3"
});

export function getFirebase() {
    return app; 
}

export function getFirestore(){
    return firebase.firestore(app);
}