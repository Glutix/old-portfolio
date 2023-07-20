import { Tech } from "../../utils/interfaces";

import expressjs from "../../assets/icons/expressjs.svg";
import redux from "../../assets/icons/redux.svg";
import javaScript from "../../assets/icons/javaScript.svg";
import typeScript from "../../assets/icons/typescript.svg";
import nodejs from "../../assets/icons/nodejs.svg";
import charjs from "../../assets/icons/chartjs.svg";
import react from "../../assets/icons/reacts.svg";
import jwt from "../../assets/icons/jwt.svg";
import sequalize from "../../assets/icons/sequelize.svg";
import git from "../../assets/icons/git.svg";
import github from "../../assets/icons/github.svg";
import bcrypt from "../../assets/icons/bcrypt.svg";
import sass from "../../assets/icons/sass.svg";
import HTML from "../../assets/icons/html5.svg";
import CSS from "../../assets/icons/css3.svg";

const data: Tech = [
	{
		name: "TypeScript",
		image: typeScript,
		url: "https://www.typescriptlang.org/",
	},
	{
		name: "JavaScript",
		image: javaScript,
		url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
	},
	{ name: "Node", image: nodejs, url: "https://nodejs.org/es" },
	{ name: "Express", image: expressjs, url: "https://expressjs.com/es/" },
	{ name: "ChartJS", image: charjs, url: "https://www.chartjs.org/" },
	{ name: "React", image: react, url: "https://es.react.dev/" },
	{ name: "Redux", image: redux, url: "https://redux.js.org/" },
	{ name: "JSON Web Token", image: jwt, url: "https://jwt.io/" },
	{ name: "Sequelize", image: sequalize, url: "https://sequelize.org/" },
	{ name: "Git", image: git, url: "https://git-scm.com/" },
	{ name: "GitHub", image: github, url: "https://github.com/" },
	{
		name: "Bcrypt",
		image: bcrypt,
		url: "https://www.npmjs.com/package/bcrypt",
	},
	{ name: "Sass", image: sass, url: "https://sass-lang.com/" },
	{
		name: "HTML",
		image: HTML,
		url: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
	},
	{
		name: "CSS",
		image: CSS,
		url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
	},
];

export default data;
