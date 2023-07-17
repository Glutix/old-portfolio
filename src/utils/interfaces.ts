export interface ProjectProps {
	name: string;
	image: { link: string; name: string };
	description: string;
	repository: string;
	demo: string;
}

export type Project = ProjectProps[];
