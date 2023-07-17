import Card from "./Card";
import data from "./data";
const Cards = () => {
	return (
		<div className="cards">
			<div className="cards-conteiner">
				{data.map((element) => {
					return <Card {...element} />;
				})}
			</div>
		</div>
	);
};

export default Cards;
