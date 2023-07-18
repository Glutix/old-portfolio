import React, { useRef } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const Contact = () => {
	const form = useRef<HTMLFormElement>(null);

	const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (form.current) {
			emailjs
				.sendForm(
					"service_dhkyyrg",
					"template_nq45l9r",
					form.current,
					"leaVQ4vTzlWI2IXEx"
				)
				.then(
					(result: EmailJSResponseStatus) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				);
		}
	};

	return (
		<div className="contact">
			<h2>Contáctame</h2>
			<form ref={form} onSubmit={sendEmail} className="form">
				<div className="contact-form">
					<section className="contact-form-section">
						<label>Nombre</label>
						<input type="text" name="user_name" />
					</section>

					<section className="contact-form-section">
						<label>Correo Electrónico</label>
						<input type="email" name="user_email" />
					</section>

					<section className="contact-form-section-message">
						<label>Mensaje</label>
						<textarea name="message" />
						<button type="submit" value="Send" className="contact-form-btn">
							Enviar
						</button>
					</section>
				</div>
			</form>
		</div>
	);
};

export default Contact;
