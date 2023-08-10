import { Project } from "../../utils/interfaces";
import facilMarket from "../../assets/Projects/FacilMarket.png";
import videoGame from "../../assets/Projects/VideoGame.png";
import rickAndMorty from "../../assets/Projects/Rick&Morty.png";
import portfolio from "../../assets/Projects/portfolio.png";
import altoNorte from "../../assets/Projects/Quincho_Alto_Norte.png";

const data: Project = [
	{
		name: "Facil Market",
		image: { link: `${facilMarket}`, name: "Projecto-image: Facil Market" },
		repository: "https://github.com/Glutix/facil-market-proyect",
		description:
			"Facil Market es una aplicación web robusta y versátil que brinda a los usuarios la posibilidad de realizar compras y ventas de productos.",
		demo: "https://www.youtube.com/watch?v=XQNHgjvIK84",
	},
	{
		name: "Quincho Alto Norte",
		image: { link: `${altoNorte}`, name: "Projecto-image: Quincho Alto Norte" },
		repository: "https://github.com/Glutix/Quincho",
		description:
			"Quincho Alto Norte representa una página única (Single Page) creada con el propósito de destacar y dar visibilidad a los servicios de un negocio familiar.",
		demo: "https://youtu.be/wkmN2-i83XQ",
	},
	{
		name: "Video Games",
		image: { link: `${videoGame}`, name: "Projecto-image: Video Games" },
		repository: "https://github.com/Glutix/VideoGames",
		description:
			"Aplicación de videojuegos con fines académicos, cuenta con características como filtros combinados, ordenamiento, paginación y búsquedas, etc.",
		demo: "https://youtu.be/ElpsvsyY05M",
	},

	{
		name: "Portfolio",
		image: { link: `${portfolio}`, name: "Projecto-image: Portfolio" },
		repository: "https://github.com/Glutix/Portfolio",
		description:
			"¡Este es mi primer portfolio creado como carta de presentación y con fines educativos!",
		demo: "https://youtu.be/0-SaPIByhsM",
	},

	{
		name: "Ricky and Morty",
		image: { link: `${rickAndMorty}`, name: "Projecto-image: Rick and Morty" },
		repository: "https://github.com/Glutix/Rick_and_Morty",
		description:
			"Aplicación con fines académicos donde cuenta con las siguientes funcionalidades, añadir cartas, filtros, ordenamiento, favoritos, etc.",
		demo: "#",
	},
];

export default data;
