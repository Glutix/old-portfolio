import React, { useRef } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import slack from "../assets/icons/slack.svg";
import whatsapp from "../assets/icons/whatsapp-icon.svg";
import meet from "../assets/icons/google-meet.svg";

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
			<h2 id="contact">Contáctame</h2>
			<div className="contact-conteiner">
				<form ref={form} onSubmit={sendEmail} className="form">
					<div className="contact-form">
						<section className="contact-form-section">
							<label>Nombre</label>
							<input type="text" name="user_name" />
						</section>

						<section className="contact-form-section">
							<label>Email</label>
							<input type="email" name="user_email" />
						</section>

						<section className="contact-form-section-message">
							<label>Mensaje</label>
							<textarea name="message" />
						</section>

						<section className="contact-form-section-btn">
							<button type="submit" value="Send">
								Enviar
							</button>
						</section>
					</div>
				</form>

				<div className="contact-plus">
					<article className="contact-plus-info">
						<section>
							<h3>Chateá conmigo</h3>
							<div>
								<a href="https://bit.ly/Glutix" target="_blank">
									<img src={whatsapp} alt="whatsapp-icon" />
									<p>WhatsApp</p>
								</a>

								<a
									href="https://join.slack.com/t/jobnetworkespacio/shared_invite/zt-1zi9y1xkk-DR~7ToWOn4LZ24KXGAoeGA
									U05H8KAN4BZ
									"
									target="_blank"
								>
									<img src={slack} alt="slack-icon" />
									<p>Slack</p>
								</a>
							</div>
						</section>

						<section>
							<h3>Agenda una cita</h3>
							<div>
								<a href="https://bit.ly/Agenda-Ricardo" target="_blank">
									<img src={meet} alt="meet-icon" />
									<p>Meeting</p>
								</a>
							</div>
						</section>
					</article>
				</div>
			</div>
		</div>
	);
};

export default Contact;
