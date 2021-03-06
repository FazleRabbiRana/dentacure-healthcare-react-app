import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import DirectSignIn from '../DirectSignIn/DirectSignIn';

const Login = () => {
	const {
		handleEmailChange,
		handlePasswordChange,
		loginUsingEmailPassword,
		prepareAuthErrorMessage,
		setAuthError,
		authError,
		user,
		setIsLoading,
	} = useAuth();

	const history = useHistory();
	const location = useLocation();
	const redirect_uri = location.state?.from || '/';

	// handle login form submit
	const handleLoginFormSubmit = e => {
		e.preventDefault();

		setIsLoading(true);
		loginUsingEmailPassword().then(() => {
			setAuthError('');
			history.push(redirect_uri);
		}).catch(error => {
			const errorMessage = prepareAuthErrorMessage(error);
			setAuthError(errorMessage);
		}).finally(() => {
			setIsLoading(false);
		})
	}

	return (
		<section className="py-10 md:py-12">
			<div className="container">
				<div className="max-w-md mx-auto text-center px-4 py-8 bg-gray-100 rounded-lg text-sm">
					<h2 className="mb-8 text-3xl text-my-primary">Login</h2>
	
					<form onSubmit={handleLoginFormSubmit} className="flex flex-col space-y-4 text-my-black">
						<input 
							type="email" 
							placeholder="Your email"
							className="w-full h-11 px-4 bg-white rounded" 
							onBlur={handleEmailChange}
						/>
						<input 
							type="password" 
							placeholder="Your password"
							className="w-full h-11 px-4 bg-white rounded" 
							onBlur={handlePasswordChange} 
						/>
						<input 
							type="submit" 
							value="Login" 
							className="btn-regular h-11 rounded"
						/>
					</form>
					<div className="mt-4 font-medium">
						{
							authError && <p className="text-red-600">{authError}</p>
						}
						{
							(user.displayName || user.email) && <p className="text-green-600">✔️ Logged in with {user.email}</p>
						}
					</div>
	
					{
						!user.email && <div className="mt-4">
							<p className="text-xs sm:text-sm font-medium mb-4">
								Don't have an account?&nbsp;
								<Link
									to="/register"
									className="text-my-primary-light hover:text-my-primary"
								>
									Register for free
								</Link>
							</p>
							<div className="text-sm my-2 flex flex-nowrap items-center">
								<hr className="flex-auto border-my-primary opacity-30" /> 
								<span className="px-4">Or</span> 
								<hr className="flex-auto border-my-primary opacity-30" />
							</div>
							<DirectSignIn />
						</div>
					}
				</div>
			</div>
		</section>
	);
};

export default Login;