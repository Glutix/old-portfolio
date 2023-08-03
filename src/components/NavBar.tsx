import { useState } from "react";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	document.body.style.overflow = !isOpen ? "auto" : "hidden";

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	const handleAncor = () => {
		setIsOpen(false);
	};

	return (
		<div className="nav-conteiner">
			<h2 className="logoText">Ferreyra</h2>

			<div className={`nav-section ${isOpen && "nav-section-open"} >`}>
				<a href="#" className="link" onClick={handleAncor}>
					Inicio
				</a>
				<a href="#projects" className="link" onClick={handleAncor}>
					Proyectos
				</a>
				<a href="#skills" className="link" onClick={handleAncor}>
					Habilidades
				</a>
				<a href="#contact" className="link" onClick={handleAncor}>
					Contacto
				</a>
			</div>

			<div
				className={`toggle ${isOpen && "toggleSpanOpen"}`}
				onClick={handleClick}
			>
				<span className={`span ${isOpen && "s1"}`}></span>
				<span className={`span ${isOpen && "s2"}`}></span>
				<span className={`span ${isOpen && "s3"}`}></span>
			</div>
		</div>
	);
};

export default NavBar;
