import { initializeApp } from "firebase/app";
import firebaseConfiguration from "./firebase.config";

const initializeFirebaseAuthentication = () => {
	initializeApp(firebaseConfiguration);
}

export default initializeFirebaseAuthentication;