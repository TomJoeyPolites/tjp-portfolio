import React from "react";
import { ContactForm } from "../components/features/ContactForm";

import profile from "../assets/profileLeft.webp";

import * as styles from "./Contact.css";

const Contact = () => {
	return (
		<div>
			<div className={styles.grid}>
				<div className="firstSection">
					<ContactForm />
				</div>
				<div className={styles.secondSection}>
					<h2 className={styles.name}>Tom Joey Power</h2>
					<img
						className={styles.profile}
						src={profile}
						alt="Tom Joey Power profile"
					/>
					<div className={styles.details}>
						<h3 className="larger">ts.polites@gmail.com</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
