import React from "react";

import * as style from "./Home.css";

import logo from "../assets/logo.jpg";

const Home = () => {
	return (
		<div className={style.page}>
			<img className={style.img} src={logo} alt="Tom Joey Polites logo" />
			<h1>TOM JOEY POLITES</h1>
			<h2 className={style.portfolio}>PORTFOLIO</h2>
			<h3>Full Stack Web Developer</h3>
		</div>
	);
};

export default Home;
