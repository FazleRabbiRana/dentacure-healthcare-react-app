import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../logo.svg';
import menuIcon from '../../../images/icons/hamburger-menu.svg';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
	const navLinkActiveStyle = {
		color: 'var(--clr-primary)',
	}

	const { user, logOut, handleActiveToggle, activeToggle } = useAuth();

	return (
		<header className="navbar py-2 md:py-4 bg-gray-50 shadow-sm z-20 sticky top-0">
			<div className="container flex items-center justify-between md:space-x-8">
				<div className="logo flex-shrink-0">
					<Link exact to="/" className="block">
						<img src={logo} alt="DetaCure logo" />
					</Link>
				</div>
				<button onClick={handleActiveToggle} className="menu-toggler ml-8 md:hidden">
					<img src={menuIcon} alt="Menu toggler" className="w-6" />
				</button>
				<nav className={!activeToggle ? 'main-nav' : 'main-nav right-0 opacity-100'}>
					<NavLink 
						to="/home"
						activeStyle={navLinkActiveStyle}
						className="font-medium md:text-sm text-gray-500 hover:text-my-primary-light"
					>
						Home
					</NavLink>
					<NavLink 
						to="/gallery"
						activeStyle={navLinkActiveStyle}
						className="font-medium md:text-sm text-gray-500 hover:text-my-primary-light"
					>
						Gallery
					</NavLink>
					<NavLink 
						to="/contact"
						activeStyle={navLinkActiveStyle}
						className="font-medium md:text-sm text-gray-500 hover:text-my-primary-light"
					>
						Contact
					</NavLink>
					<div className="flex items-center flex-wrap">
						{
							(user.displayName || user.email) ? (
								<>
									<p className="inline-block font-semibold text-sm text-my-black mr-2 md:ml-3 w-full md:w-auto border-b border-my-primary mb-2 md:mb-0">
										{user.displayName ? user.displayName : 'Anonymous'}
									</p>
									<button
										onClick={logOut}
										className="btn-regular-pill py-2 px-4 bg-my-primary-light"
									>
										Logout
									</button>
								</>
							) : (
								<NavLink 
									to="/login"
									className="btn-regular-pill py-2 px-4"
								>
									Login
								</NavLink>
							)
						}
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;