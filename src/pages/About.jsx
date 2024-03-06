import React from "react";

import * as styles from "./About.css";

import profile from "../assets/profileLeft.jpg";
const About = () => {
	console.log("About Page");
	return (
		<div>
			<div className={styles.topSection}>
				<div>
					<p className={styles.p}>
						I am a full stack web developer currently based in Melbourne.
						I&#39;ve been working with entrepreneurs and small businesses to
						grow and enhance their online presence and business. I embarked on
						my web development journey in 2022, enrolling in an online program
						at Holmesglen to complete a certificate IV in Front-End Development.
						After mastering key concepts in my first course, I continued to
						complete a double diploma in Front-End and Back-End web development.
					</p>
					<p className={styles.p}>
						During my diploma I successfully created a range of diverse
						applications, showcasing proficiency in both front-end and back-end
						development in React, Next.Js, Express.Js, Node.Js, MongoDB and
						Firebase. In a lead developer role through my diploma, I managed and
						guided a student development team contributing to the creation of a
						client&#39;s website that successfully met the buisness needs and
						goals.
					</p>
					<p className={styles.p}>
						Recognising my skills and dedication during my studies, Holmesglen
						presented me with an opportunity to collaborate with my current
						client upon the completion of my diplomas. This project has further
						refined my proficiency in web development. I am now eager to explore
						new opportunities where I can leverage my skills and contribute to
						innovative web development projects.
					</p>
				</div>
				<div className={styles.image}>
					<img
						className={styles.profile}
						src={profile}
						alt="Tom Joey Polites profile"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
