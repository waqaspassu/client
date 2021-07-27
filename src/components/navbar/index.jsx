import React from "react";

import { NavLink } from "react-router-dom";
import Button from "./../button";
import Logo from "./logo.png";
import "./styles.css";

const Navbar = () => {
	const [click, setClick] = React.useState(false);
	const handleClick = () => {
		setClick(!click);
	};
	return (
		<div className="main-container">
			<nav className="Navbar">
				<div className="nav-container">
					<div className="nav-logo">
						<NavLink exact to="/" className="nav-logo">
							<img src={Logo} alt="" />
							<h5 className="logo-heading">Your Site</h5>
						</NavLink>
					</div>
					<div className="nav-main-menu">
						<ul className="nav-menu">
							<li className="nav-item">
								<NavLink
									onClick={click ? handleClick : null}
									exact
									to="/"
									activeClassName="active"
									className="nav-links"
								>
									Become an Artist
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									onClick={click ? handleClick : null}
									exact
									to="/"
									activeClassName="active"
									className="nav-links"
								>
									Help
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									onClick={click ? handleClick : null}
									exact
									to="/"
									activeClassName="active"
									className="nav-links"
								>
									Contact us
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									onClick={click ? handleClick : null}
									exact
									to="/"
									activeClassName="active"
									className="nav-links"
								>
									About Us
								</NavLink>
							</li>
						</ul>
						<Button title="login" type="secondary" />
						<Button title="sign up" type="primary" />
					</div>
					<div className="nav-icon" onClick={handleClick}>
            <div className="bars"></div>
            <div className="bars"></div>
            <div className="bars"></div>
          </div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
