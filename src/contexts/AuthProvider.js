import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const allAuthContexts = useFirebase();

	return (
		<AuthContext.Provider value={allAuthContexts}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;