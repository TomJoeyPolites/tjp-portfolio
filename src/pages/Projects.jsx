import React from "react";

import * as styles from "./Projects.css";

import vivid from "../assets/vivid.webp";
import tmp from "../assets/tmp.webp";
import allyoucan from "../assets/allyoucan.webp";
import asoiaf from "../assets/asoiaf.png";

import {
	FaHtml5,
	FaCss3Alt,
	FaWordpress,
	FaNodeJs,
	FaReact,
	FaPhp,
} from "react-icons/fa";
import {
	SiExpress,
	SiMongodb,
	SiMongoose,
	SiNextdotjs,
	SiSass,
} from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

const Projects = () => {
	return (
		<div>
			<div className={styles.gallery}>
				<a
					target="_blank"
					rel="noreferrer"
					className={styles.project}
					href="https://tmp-wedding.onrender.com"
					aria-label="TMP Wedding Website link">
					<img className={styles.img} src={tmp} alt="TMP Website Image" />{" "}
					<div>
						<h3 className={styles.h3}>TMP Wedding</h3>
						<p>
							Web application developed for my fiancée and I&#39;s wedding.
							Created for our guests to access information about the wedding,
							details on events, ask questions and confirm their rsvps.
						</p>
						<p>Login Code = 26042024</p>
						<div>
							<IoLogoFirebase className={styles.icon} />
							<SiExpress className={styles.icon} />
							<FaReact className={styles.icon} />
							<FaNodeJs className={styles.icon} />
						</div>
					</div>
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					className={styles.project}
					href="https://vividfunerals.com.au/"
					aria-label="Vivid Funerals link">
					<img
						className={styles.img}
						src={vivid}
						alt="Vivid Funerals Website Image"
					/>
					<div>
						<h3 className={styles.h3}>Vivid Funerals</h3>
						<p>
							Participating in Summer Tech Live through Holmesglen, myself and
							another junior developer created this website for a funeral
							service. This was developed using Divhunt within a limited
							timeframe.
						</p>
						<div>
							<FaHtml5 className={styles.icon} />
							<FaCss3Alt className={styles.icon} />
							<RiJavascriptFill className={styles.icon} />
						</div>
					</div>
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					className={styles.project}
					href="https://allyoucantravel.com.au/en/"
					aria-label="All you can Travel  link">
					<img
						className={styles.img}
						src={allyoucan}
						alt="Allyoucan Travel Website Image"
					/>
					<div>
						<h3 className={styles.h3}>Allyoucan Travel</h3>
						<p>
							First &rdquo;real world&rdquo; client based project developed by a
							student team where I took the role of the lead developer. The
							client desired a marketing website to target traveling customers
							between Australia and China.
						</p>
						<div>
							<FaWordpress className={styles.icon} />
							<FaPhp className={styles.icon} />
							<FaHtml5 className={styles.icon} />
							<FaCss3Alt className={styles.icon} />
						</div>
					</div>
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					className={styles.project}
					href="https://asoiaf-tmg-api.vercel.app/"
					aria-label="A Song of Ice and Fire Tabletop Miniture Game API link">
					<img
						className={styles.img}
						src={asoiaf}
						alt="ASOIAF-TMG API Website Image"
					/>
					<div>
						<h3 className={styles.h3}>ASOIAF-TMG API</h3>
						<p>
							First project using Next.Js with Sass for the client side and a
							server side project using MongoDB, Mongoose and express. This
							project was based on the tabletop miniture game based in the Game
							of Thrones universe.
						</p>
						<div>
							<SiNextdotjs className={styles.icon} />
							<SiMongodb className={styles.icon} />
							<SiExpress className={styles.icon} />
							<SiMongoose className={styles.icon} />
							<SiSass className={styles.icon} />
						</div>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Projects;
