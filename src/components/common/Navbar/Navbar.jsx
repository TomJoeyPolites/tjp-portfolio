import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { CiFileOn } from "react-icons/ci";

import * as styles from "./Navbar.css";
import { ContactForm } from "../../features/ContactForm";

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
						href="https://github.com/TomJoeyPolites">
						<FaGithub
							className={styles.icon}
							size="45"
							aria-label="github link"
						/>
					</a>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/tom-polites-418318156/">
						<FaLinkedin
							className={styles.icon}
							size="45"
							aria-label="linkedIn link"
						/>
					</a>
					<CiFileOn className={styles.icon} size="45" />
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
									href="https://tmp-wedding.onrender.com">
									<h3>TMP Wedding</h3>
								</a>
								<a
									target="_blank"
									rel="noreferrer"
									className={styles.project}
									href="https://vividfunerals.com.au/">
									<h3>Vivid Funerals</h3>
								</a>
								<a
									target="_blank"
									rel="noreferrer"
									className={styles.project}
									href="https://allyoucantravel.com.au/en/">
									<h3>Allyoucan Travel</h3>
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
								<h3>+61 0423 776 594</h3>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default Navbar;
