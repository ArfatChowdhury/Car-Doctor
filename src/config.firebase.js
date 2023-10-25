// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6-BYaY45raBmhpvDJtFiqS0U2hlg2WbE",
  authDomain: "car-doctor-77dd6.firebaseapp.com",
  projectId: "car-doctor-77dd6",
  storageBucket: "car-doctor-77dd6.appspot.com",
  messagingSenderId: "707345205425",
  appId: "1:707345205425:web:f673877a9e918116477a90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app