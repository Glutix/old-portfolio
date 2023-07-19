import gluti from "../assets/Gluti.jpg";
import gitHub from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";

const About = () => {
	return (
		<div className="about">
			<div className="about-conteiner-card">
				<div className="box">
					<h2>Ferreyra Ricardo</h2>
					<img
						src={gluti}
						alt="Foto de perfil"
						loading="lazy"
						className="box-image-profile"
					/>

					<h2>Full Stack Developer</h2>
				</div>
			</div>

			<div className="about-conteiner-info">
				<section className="info-about">
					<h2>Sobre mí</h2>
					<p>
						¡Hola! 👋 Soy Ricardo, un apasionado desarrollador Full Stack con
						experiencia en la creación de aplicaciones web innovadoras y
						escalables. Me especializo en el uso de TypeScript con React y
						Express para construir soluciones tecnológicas de alto rendimiento.
					</p>
				</section>

				<a
					href="https://drive.google.com/file/d/1GpHwmeETA2NFM6fUr6x7Tf5Ilm_xNdrc/view?usp=sharing"
					target="_blank"
					rel="noopener noreferrer"
					download
				>
					<button>Curriculum</button>
				</a>

				<section className="info-redes">
					<h2>Redes Sociales</h2>
					<div className="conteiner-icons">
						<a href="https://github.com/Glutix" target="_blank">
							<img
								className="icon"
								src={gitHub}
								alt="icon-gitHub"
								loading="lazy"
							/>
						</a>

						<a
							href="https://www.linkedin.com/in/ricardo-ferreyra/"
							target="_blank"
						>
							<img
								className="icon"
								src={linkedin}
								alt="icon-linkedin"
								loading="lazy"
							/>
						</a>

						<a href="https://twitter.com/Glutix_32" target="_blank">
							<img
								className="icon"
								src={twitter}
								alt="icon-twitter"
								loading="lazy"
							/>
						</a>

						<a href="https://www.instagram.com/glutinose/" target="_blank">
							<img
								className="icon"
								src={instagram}
								alt="icon-instagram"
								loading="lazy"
							/>
						</a>
					</div>
				</section>
			</div>
		</div>
	);
};

export default About;
