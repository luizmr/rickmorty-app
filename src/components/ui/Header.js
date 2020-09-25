import React from "react";
import logo from "../../img/logo.png";

const Header = ({ getHome }) => {
	return (
		<header className="center">
			<img
				src={logo}
				alt="logo"
				onClick={() => {
					getHome(1, "");
				}}
			/>
		</header>
	);
};

export default Header;
