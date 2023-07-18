import { TechProps } from "../../utils/interfaces";
const Tech: React.FC<TechProps> = (tech) => {
	return (
		<div className="tech">
			<a href={tech.url} target="_blank">
				<div>
					<img src={tech.image} alt={tech.name} className="tech-icon" />
					<h3>{tech.name}</h3>
				</div>
			</a>
		</div>
	);
};

export default Tech;
