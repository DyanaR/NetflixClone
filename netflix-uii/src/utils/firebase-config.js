import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
