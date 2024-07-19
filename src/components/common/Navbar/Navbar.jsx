import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { CiFileOn } from "react-icons/ci";

import * as styles from "./Navbar.css";

const Navbar = () => {
	const navigate = useNavigate();
	const [openNavigation, setOpenNavigation] = useState(false);

	const openNavBar = () => {
		setOpenNavigation(true);
	};

	const closeNavBar = () => {
		setOpenNavigation(false);
	};

	const navigateTo = (route) => {
		setOpenNavigation(false);
		navigate(route);
	};

	return (
		<div>
			<div className={styles.navbar}>
				<div>
					{!openNavigation ? (
						<RxHamburgerMenu
							className={styles.hamburger}
							size="45"
							onClick={!openNavigation ? openNavBar : closeNavBar}
						/>
					) : (
						<RxCross2
							className={styles.hamburger}
							size="45"
							onClick={!openNavigation ? openNavBar : closeNavBar}
						/>
					)}
				</div>
				<div className={styles.iconLinks}>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/TomJoeyPolites"
						aria-label="github link">
						<FaGithub className={styles.icon} size="45" />
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/tom-power-418318156/"
						aria-label="linkedIn link">
						<FaLinkedin className={styles.icon} size="45" />
					</a>
				</div>
			</div>
			{openNavigation == true ? (
				<div className={styles.navigation}>
					<div className={styles.navScreen}>
						<div>
							<h2
								className={styles.navScreenLink}
								onClick={() => navigateTo("about")}>
								ABOUT
							</h2>
						</div>
						<div>
							<h2
								className={styles.navScreenLink}
								onClick={() => navigateTo("projects")}>
								PROJECTS
							</h2>
							<div className={styles.projectLinks}>
								<a
									target="_blank"
									rel="noreferrer"
									className={styles.project}
									href="https://tmp-wedding.onrender.com"
									aria-label="TMP Wedding Website link">
									<h3>TMP Wedding</h3>
								</a>
								<a
									target="_blank"
									rel="noreferrer"
									className={styles.project}
									href="https://vividfunerals.com.au/"
									aria-label="Vivid Funerals link">
									<h3>Vivid Funerals</h3>
								</a>
								<a
									target="_blank"
									rel="noreferrer"
									className={styles.project}
									href="https://allyoucantravel.com.au/zh/"
									aria-label="All you can Travel link">
									<h3>Allyoucan Travel</h3>
								</a>
								<a
									target="_blank"
									rel="noreferrer"
									className={styles.project}
									href="https://asoiaf-tmg-api.vercel.app/"
									aria-label="A Song of Ice and Fire Tabletop Miniature Game API link">
									<h3>ASOIAF-TMG API</h3>
								</a>
							</div>
						</div>
						<div>
							<h2
								className={styles.navScreenLink}
								onClick={() => navigateTo("contact")}>
								CONTACT
							</h2>
							<div className={styles.projectLinks}>
								<h3>ts.polites@gmail.com</h3>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default Navbar;
