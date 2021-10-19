import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeFirebaseAuthentication from "../pages/Login/Firebase/firebase.init";

initializeFirebaseAuthentication();

const useFirebase = () => {
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState({});
	const [authError, setAuthError] = useState('');
	// const [isLoading, setIsLoading] = useState(true);

	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();

	// handle user name change
	const handleUserNameChange = e => {
		setUserName(e.target.value);
	}

	// handle user email change
	const handleEmailChange = e => {
		setEmail(e.target.value);
	}

	// handle user password change
	const handlePasswordChange = e => {
		setPassword(e.target.value);
	}

	// check password with regular expression
	const checkPassRegexp = password => {
		const passRegex = /^(?=.*[A-Z].*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9]).{8,}$/;
		const result = passRegex.test(password);
		console.log(password, result);
		return result;
	};

	// process login using email and password
	const loginUsingEmailPassword = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then(result => {
				console.log(result.user);
				setUser(result.user);
				setAuthError('');
			})
			.catch(error => {
				console.log(error);
				setAuthError(error.message);
			});
	}

	// register new user with email and password
	const registerWithEmailPassword = () => {
		// check password
		if (!checkPassRegexp(password)) {
			setAuthError('Password is weak. Follow the above instruction.');
			return;
		}

		createUserWithEmailAndPassword(auth, email, password)
			.then(result => {
				console.log(result.user);
				setRegisteredUserName();
				setUser(result.user);
				setAuthError('');
			})
			.catch(error => {
				console.log(error);
				setAuthError(error.message);
			});
	}

	// set registered user name
	const setRegisteredUserName = () => {
		updateProfile(auth.currentUser, {
			displayName: userName
		})
			.then(result => {
				console.log(result);
				setAuthError('');
			})
			.catch(error => {
				console.log(error);
				setAuthError(error.message);
			});
	}

	// sign in using google
	const signInUsingGoogle = () => {
		signInWithPopup(auth, googleProvider)
			.then(result => {
				console.log(result.user);
				setUser(result.user);
				setAuthError('');
			})
			.catch(error => {
				console.log(error);
				setAuthError(error.message);
			});
	}

	// observe user auth status
	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, user => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
		});
		return unsubscribed;
	}, []);

	// logout
	const logOut = () => {
		signOut(auth)
			.then(() => {
				setUser({})
			})
			.catch(error => {
				console.log(error);
				setAuthError(error.message);
			})
	}

	return {
		handleUserNameChange,
		handleEmailChange,
		handlePasswordChange,
		registerWithEmailPassword,
		loginUsingEmailPassword,
		signInUsingGoogle,
		user,
		authError,
		logOut,
	}
}

export default useFirebase;