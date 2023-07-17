import gluti from "../assets/Gluti.jpg";

const About = () => {
	return (
		<div className="about">
			<div className="about-conteiner-left">
				<div className="triangle">
					<img src={gluti} alt="Foto de perfil" />
				</div>
			</div>

			<div className="about-conteiner-rigth">
				<section className="about-conteiner-rigth-section">
					<h1>¡Hola! Soy Ricardo Full Stack Developer</h1>
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
