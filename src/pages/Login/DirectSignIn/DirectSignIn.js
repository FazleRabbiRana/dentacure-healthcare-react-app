import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import googleIcon from '../../../images/icons/google.svg';
import githubIcon from '../../../images/icons/github.svg';
// import facebookIcon from '../../../images/icons/facebook-circled.svg';

const DirectSignIn = () => {
	const { 
		signInUsingGoogle, 
		signInUsingGithub,
		prepareAuthErrorMessage, 
		setAuthError, 
		setUser 
	} = useAuth();

	const history = useHistory();
	const location = useLocation();
	const redirect_uri = location.state?.from || '/';

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

	// handle github sign in
	const handleGithubSignIn = () => {
		signInUsingGithub().then(result => {
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
			<div className="mt-4 flex justify-center space-x-1 sm:space-x-4 text-xs">
				<button onClick={handleGoogleSignIn} className="rounded border shadow-md p-2 sm:px-3 group">
					<img src={googleIcon} alt="Google" className="block h-8 sm:h-10 mx-auto mb-1 duration-500 rotate-y-360-group-hover" />
					Google
				</button>
				<button onClick={handleGithubSignIn} className="rounded border shadow-md p-2 sm:px-3 group">
					<img src={githubIcon} alt="GitHub" className="block h-8 sm:h-10 mx-auto mb-1 duration-500 rotate-y-360-group-hover" />
					GitHub
				</button>
				{/* <button onClick={handleFacebookSignIn} className="rounded border shadow-md p-2 sm:px-3 group">
					<img src={facebookIcon} alt="Google" className="block h-8 sm:h-10 mx-auto mb-1 duration-500 rotate-y-360-group-hover" />
					Facebook
				</button> */}
			</div>
		</div>
	);
};

export default DirectSignIn;