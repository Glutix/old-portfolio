const Navbar = () => {
	return (
		<div className="nav-conteiner">
			<h1 className="nav-title"> Ferreyra</h1>

			<section className="nav-section">
				<a href="#">
					<p>Inicio</p>
				</a>
				<a href="#projects">
					<p>Projectos</p>
				</a>
				<a href="#skills">
					<p>Habilidades</p>
				</a>
				<a href="#contact">
					<p>Contáctame</p>
				</a>
			</section>
		</div>
	);
};

export default Navbar;
