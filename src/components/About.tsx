import gluti from "../assets/Gluti.jpg";
import gitHub from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";

const About = () => {
	return (
		<div className="about">
			<div className="about-conteiner-card">
				<div className="box">
					<h2>Glutix</h2>
					<img src={gluti} alt="Foto de perfil" />
					<section className="box-section">
						<a href="https://github.com/Glutix" target="_blank">
							<img className="box-icon" src={gitHub} alt="icon-gitHub" />
						</a>
						<a
							href="https://www.linkedin.com/in/ricardo-ferreyra/"
							target="_blank"
						>
							<img className="box-icon" src={linkedin} alt="icon-linkedin" />
						</a>
					</section>
				</div>
			</div>

			<div className="about-conteiner-info">
				<section className="about-conteiner-info-section">
					<h2>¡Hola! Soy Ricardo Full Stack Developer</h2>
					<p>
						con experiencia en la creación de aplicaciones web innovadoras y
						escalables. Me especializo en el uso de TypeScript con React y
						Express para construir soluciones tecnológicas de alto rendimiento.
					</p>
				</section>
			</div>
		</div>
	);
};

export default About;
