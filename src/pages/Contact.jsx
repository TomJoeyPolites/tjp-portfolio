import React from "react";
import { ContactForm } from "../components/features/ContactForm";

import profile from "../assets/profileLeft.jpg";

import * as styles from "./Contact.css";

const Contact = () => {
	return (
		<div>
			<div className={styles.grid}>
				<div className="firstSection">
					<ContactForm />
				</div>
				<div className={styles.secondSection}>
					<h2 className={styles.name}>Tom Joey Polites</h2>
					<img
						className={styles.profile}
						src={profile}
						alt="Tom Joey Polites profile"
					/>
					<div className={styles.details}>
						<h3 className="larger">ts.polites@gmail.com</h3>
						<h3 className="larger">+61 0423 776 594</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;