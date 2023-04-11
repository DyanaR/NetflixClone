import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnIwwUaD7tpWQH4Av0XcB8lxzl16HBoNM",
  authDomain: "netflix-clone-fae87.firebaseapp.com",
  projectId: "netflix-clone-fae87",
  storageBucket: "netflix-clone-fae87.appspot.com",
  messagingSenderId: "180460124084",
  appId: "1:180460124084:web:1a408451f4b3f892f9e4e1",
  measurementId: "G-DPV9NTLXPF"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);