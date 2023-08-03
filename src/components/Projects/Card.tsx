import { ProjectProps } from "../../utils/interfaces";
import { useState } from "react";
import gitHub from "../../assets/icons/github.svg";
import youtube from "../../assets/icons/youtube.svg";

const Card: React.FC<ProjectProps> = (data) => {
	const [isTouched, setIsTouched] = useState(false);

	const handleTouchStart = () => {
		setIsTouched(true);
	};

	const handleTouchEnd = () => {
		setIsTouched(false);
	};

	const normalRender = () => {
		return (
			<div className="normal-render">
				<h3>{data.name}</h3>
				<img src={data.image.link} alt={data.image.name} loading="lazy" />
			</div>
		);
	};

	const hoverRender = () => {
		return (
			<div className="hovered-render">
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
			</div>
		);
	};

	return (
		<div
			className="card"
			onMouseEnter={handleTouchStart}
			onMouseLeave={handleTouchEnd}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
		>
			{!isTouched ? normalRender() : hoverRender()}
		</div>
	);
};

export default Card;
