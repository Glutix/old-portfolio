//? Interfaces
export interface ProjectProps {
	name: string;
	image: { link: string; name: string };
	description: string;
	repository: string;
	demo: string;
}

export interface TechProps {
	name: string;
	image: string;
	url: string;
}

//? Types
export type Project = ProjectProps[];
export type Tech = TechProps[];
