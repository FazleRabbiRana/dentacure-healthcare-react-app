import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import DirectSignIn from '../DirectSignIn/DirectSignIn';

const Register = () => {
	const { handleUserNameChange, handleEmailChange, handlePasswordChange, registerWithEmailPassword, user, authError } = useAuth();

	const handleFormSubmit = e => {
		e.preventDefault();
		registerWithEmailPassword();
	}

	return (
		<section className="py-10 md:py-12">
			<div className="container">
				<div className="max-w-md mx-auto text-center px-4 py-8 bg-gray-100 rounded-lg text-sm">
					<h2 className="mb-8 text-3xl text-my-primary">Free Register</h2>
	
					<form onSubmit={handleFormSubmit} className="flex flex-col space-y-4">
						<input 
							type="text" 
							placeholder="Name"
							id="user_name"
							className="w-full h-11 px-4 bg-white rounded" 
							onBlur={handleUserNameChange}
						/>
						<input 
							required
							type="email" 
							placeholder="Email"
							id="user_email"
							className="w-full h-11 px-4 bg-white rounded" 
							onBlur={handleEmailChange}
						/>
						<div>
							<input 
								required
								type="Password" 
								placeholder="password"
								id="user_password"
								className="w-full h-11 px-4 bg-white rounded" 
								onBlur={handlePasswordChange}
							/>
							<p className="my-1 text-xs text-gray-400 text-left">
								Password must be at least 8 chars long, contain at least 1 special character (!@#$&*), 2 numerals (0-9) and 3 letters (2 in UPPERCASE). No spaces and emoji.
							</p>
						</div>
						<input 
							type="submit" 
							value="Submit" 
							className="btn-regular h-11 rounded"
						/>
					</form>
					<div className="mt-4 font-medium">
						{
							authError && <p className="text-red-600">{authError}</p>
						}
						{
							user.email && <p className="text-green-600">✔️ Registered {user.email}</p>
						}
					</div>
	
					{
						!user.email && <div className="mt-4">
							<p className="text-xs sm:text-sm font-medium mb-4">
								Already have an account?&nbsp;
								<Link
									to="/login"
									className="text-my-primary-light hover:text-my-primary"
								>
									Login
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

export default Register;