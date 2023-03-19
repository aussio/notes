// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwhXL3gcVLIZWV0bugxWPaJ2HqgdMjsrg",
  authDomain: "barrel-be38a.firebaseapp.com",
  projectId: "barrel-be38a",
  storageBucket: "barrel-be38a.appspot.com",
  messagingSenderId: "330254507459",
  appId: "1:330254507459:web:3fcaac2f8a6fa555d9f176",
  measurementId: "G-WFPZVGEWED"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);