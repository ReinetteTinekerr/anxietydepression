// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDJnT7f4OkrK92cj73atvzHHU7a5eiFMoU",
    authDomain: "anxietydepression-b3767.firebaseapp.com",
    projectId: "anxietydepression-b3767",
    storageBucket: "anxietydepression-b3767.appspot.com",
    messagingSenderId: "1009563681035",
    appId: "1:1009563681035:web:1cecf4799d8070f001620e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
