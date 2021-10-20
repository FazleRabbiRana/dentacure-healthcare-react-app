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
	const [isLoading, setIsLoading] = useState(true);
	const [activeToggle, setActiveToggle] = useState(false);

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
		// console.log(password, result);
		return result;
	};

  // prepare auth error message
  const prepareAuthErrorMessage = error => {
    const errorCode = error.code;
    const output = errorCode.slice(5).replace(/-/g, ' ');
    // console.log(output);
    return output;
  }

	// register new user with email and password
	const registerWithEmailPassword = () => {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	// set registered user name
	const setRegisteredUserName = () => {
		updateProfile(auth.currentUser, {
			displayName: userName
		}).then(() => {
			setAuthError('');
		}).catch(error => {
			console.log(error);
			const errorMessage = prepareAuthErrorMessage(error);
			setAuthError(errorMessage);
		});
	}

	// process login using email and password
	const loginUsingEmailPassword = () => {
		return signInWithEmailAndPassword(auth, email, password);
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

		// return signInWithPopup(auth, googleProvider);
	}

	// observe user auth status
	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, user => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscribed;
	}, []);

	// logout function
	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				setUser({})
				setAuthError('');
			})
			.catch(error => {
				console.log(error);
				setAuthError(error.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}

	// handle mobile menu toggle
	const handleActiveToggle = () => {
		setActiveToggle(!activeToggle);
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
		isLoading,
		logOut,
		activeToggle,
		handleActiveToggle,
		setRegisteredUserName,
		setAuthError,
		prepareAuthErrorMessage,
		checkPassRegexp,
		setIsLoading,
	}
}

export default useFirebase;