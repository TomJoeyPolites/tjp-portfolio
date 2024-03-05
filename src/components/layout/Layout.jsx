// Layout.js
import { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Navbar from "../common/Navbar/Navbar";
import * as style from "./Layout.css";

const Layout = () => {
	const navigate = useNavigate();
	let location = useLocation();
	console.log(location.pathname);
	const [rightArrowLink, setRightArrowLink] = useState("");
	const [leftArrowLink, setLeftArrowLink] = useState("");
	const [pageNum, setPageNum] = useState("");
	const [heading, setHeading] = useState("");

	const setPage = () => {
		switch (location.pathname) {
			case "/":
				setRightArrowLink("about");
				setLeftArrowLink("null");
				setPageNum("00");
				setHeading("");
				break;
			case "/about":
				setRightArrowLink("projects");
				setLeftArrowLink("/");
				setPageNum("01");
				setHeading("A LITTLE ABOUT ME");
				break;
			// case "/skills":
			// 	setRightArrowLink("projects");
			// 	setLeftArrowLink("about");
			// 	setPageNum("02");
			// 	break;
			case "/projects":
				setRightArrowLink("contact");
				setLeftArrowLink("about");
				setPageNum("02");
				setHeading("PROJECTS");
				break;
			case "/contact":
				setRightArrowLink("null");
				setLeftArrowLink("projects");
				setPageNum("03");
				setHeading("WORK WITH ME");
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		setPage();
	}, [location]);

	// Function to handle navigation
	const navigateTo = (route) => {
		navigate(route);
	};

	return (
		<div className={style.layout}>
			<Navbar className={style.navBar} />
			<div className={style.content}>
				<Outlet />
			</div>
			<div className={style.headings}>
				<h2>{heading}</h2>
			</div>
			<div className={style.pageNumberCircle}>
				<p className={style.pageNumber}>{pageNum}</p>
			</div>
			{leftArrowLink == "null" ? (
				<div className={style.leftArrow}></div>
			) : (
				<div className={style.leftArrow}>
					<FaArrowLeft
						className={style.leftArrowIcon}
						onClick={() => navigateTo(leftArrowLink)}
					/>
				</div>
			)}
			{rightArrowLink == "null" ? (
				<div className={style.rightArrow}></div>
			) : (
				<div className={style.rightArrow}>
					<FaArrowRight
						className={style.rightArrowIcon}
						onClick={() => navigateTo(rightArrowLink)}
					/>
				</div>
			)}
			<div className={style.space}></div>
		</div>
	);
};

export default Layout;