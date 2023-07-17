import { ProjectProps } from "../../utils/interfaces";

const Card: React.FC<ProjectProps> = (data) => {
	return (
		<div className="card">
			<div className="project">
				<h1>{data.name}</h1>
			</div>
		</div>
	);
};

export default Card;
