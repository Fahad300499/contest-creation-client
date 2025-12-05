// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgNMixcwpE-PhKcgcP_PlfsuRplTFtvEE",
  authDomain: "context-creation-client.firebaseapp.com",
  projectId: "context-creation-client",
  storageBucket: "context-creation-client.firebasestorage.app",
  messagingSenderId: "971849821804",
  appId: "1:971849821804:web:635fbd403cb3e1b4987249"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);