import { Project } from "../../utils/interfaces";
import facilMarket from "../../assets/Projects/FacilMarket.png";
import videoGame from "../../assets/Projects/VideoGame.png";
import rickAndMorty from "../../assets/Projects/Rick&Morty.png";

const data: Project = [
	{
		name: "Facil Market",
		image: { link: `${facilMarket}`, name: "Projecto-image: Facil Market" },
		repository: "https://github.com/Glutix/facil-market-proyect",
		description:
			"Facil Market es una aplicación web robusta y versátil que brinda a los usuarios la posibilidad de realizar compras y ventas de productos, además de facilitar la conexión entre ellos.",
		demo: "https://www.youtube.com/watch?v=XQNHgjvIK84",
	},
	{
		name: "Video Games",
		image: { link: `${videoGame}`, name: "Projecto-image: Video Games" },
		repository: "https://github.com/Glutix/VideoGames",
		description:
			"Aplicación web de videojuegos con fines académicos, cuenta con características como filtros combinados, ordenamiento, paginación y búsqueda por nombre, entre otras.",
		demo: "string",
	},

	{
		name: "Ricky and Morty",
		image: { link: `${rickAndMorty}`, name: "Projecto-image: Rick and Morty" },
		repository: "https://github.com/Glutix/Rick_and_Morty",
		description:
			"Aplicación web con fines académicos donde cuenta con las siguientes funcionalidades, agregar cartas de personajes ingresando un id, filtros, ordenamiento, favoritos, etc...",
		demo: "string",
	},
];

export default data;
