import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import googleIcon from '../../../images/icons/google.svg';

const DirectSignIn = () => {
	const { 
		signInUsingGoogle, 
		prepareAuthErrorMessage, 
		setAuthError, 
		setUser 
	} = useAuth();
	
	const history = useHistory();
	const location = useLocation();
	const redirect_uri = location.state?.from || '/home';

	// handle google sign in
	const handleGoogleSignIn = () => {
		signInUsingGoogle().then(result => {
			setUser(result.user);
			setAuthError('');
			history.push(redirect_uri);
		}).catch(error => {
			const errorMessage = prepareAuthErrorMessage(error);
			setAuthError(errorMessage);
		});
	}

	return (
		<div className="alternate-sign-in-options text-center">
			<h4 className="text-xl font-semibold">Sign in using</h4>
			<div className="mt-4 flex justify-center space-x-2 sm:space-x-4 text-xs">
				<button onClick={handleGoogleSignIn} className="rounded border shadow-md p-2 group">
					<img src={googleIcon} alt="Google" className="block h-10 mx-auto mb-1 duration-500 rotate-y-360-group-hover" />
					Google
				</button>
			</div>
		</div>
	);
};

export default DirectSignIn;