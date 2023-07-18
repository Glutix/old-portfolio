import { ProjectProps } from "../../utils/interfaces";
import { useState } from "react";
import gitHub from "../../assets/icons/github.svg";
import youtube from "../../assets/icons/youtube.svg";

const Card: React.FC<ProjectProps> = (data) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const normalRender = () => {
		return (
			<>
				<h3>{data.name}</h3>
				<img src={data.image.link} alt={data.image.name} loading="lazy" />
			</>
		);
	};

	const hoverRender = () => {
		return (
			<>
				<section className="section-text">
					<p>{data.description}</p>
				</section>
				<section className="section-icon">
					<a href={data.repository} target="_blank">
						<img
							className="card-icon"
							src={gitHub}
							alt="icon-github"
							loading="lazy"
						/>
					</a>

					<a href={data.demo} target="_blank">
						<img
							className="card-icon"
							src={youtube}
							alt="icon-youtube"
							loading="lazy"
						/>
					</a>
				</section>
			</>
		);
	};

	return (
		<div
			className="card"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{!isHovered ? normalRender() : hoverRender()}
		</div>
	);
};

export default Card;
