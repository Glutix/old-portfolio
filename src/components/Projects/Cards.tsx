import Card from "./Card";
import data from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Cards = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		initialSlide: 0,
		className: "cards-slider",
		adaptiveHeight: true,
		accessibility: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
		],
	};

	return (
		<div className="cards">
			<h2 id="projects"> Projectos </h2>

			<div className="cards-slider">
				<Slider {...settings}>
					{data.map((element, index) => {
						return (
							<div className="cards-conteiner" key={index}>
								<Card {...element} />
							</div>
						);
					})}
				</Slider>
			</div>
		</div>
	);
};

export default Cards;
