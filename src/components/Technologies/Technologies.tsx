import data from "../Technologies/data";
import { TechProps } from "../../utils/interfaces";
import Tech from "../Technologies/Tech";

const Technologies = () => {
	return (
		<div className="technologies">
			<h2 id="skills">Tecnologias</h2>
			<div className="technologies-conteiner">
				{data.map((tech: TechProps) => {
					return <Tech {...tech} />;
				})}
			</div>
		</div>
	);
};

export default Technologies;
