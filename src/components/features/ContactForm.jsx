import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import * as styles from "./ContactForm.css";

export const ContactForm = () => {
	const form = useRef();
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [formError, setFormError] = useState("");

	const sendEmail = (e) => {
		e.preventDefault();

		// Validate form fields
		const formData = new FormData(form.current);
		const name = formData.get("user_name");
		const email = formData.get("user_email");
		const message = formData.get("message");

		// Check if required fields are filled
		if (!name || !email || !message) {
			setFormError("Please fill out all required fields.");
			return;
		}

		// Proceed with form submission
		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				form.current,
				{
					publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
				}
			)
			.then(
				() => {
					setFormSubmitted(true);
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};

	return (
		<div>
			{!formSubmitted ? (
				<form className={styles.form} ref={form} onSubmit={sendEmail}>
					<label>Name:</label>
					<input
						className={styles.input}
						type="text"
						name="user_name"
						placeholder="Name"
						required
					/>
					<label>Email:</label>
					<input
						className={styles.input}
						type="email"
						name="user_email"
						placeholder="Email"
						required
					/>
					<label>Message:</label>
					<textarea
						className={styles.textarea}
						name="message"
						placeholder="Say hi :)"
						required
					/>
					<input className={styles.formButton} type="submit" value="Send" />
					{formError && <p className={styles.error}>{formError}</p>}
				</form>
			) : (
				<div className={styles.formSubmitted}>
					<h3>
						Message sent 👍 <br /> Thank you for contacting me.
					</h3>
				</div>
			)}
		</div>
	);
};
