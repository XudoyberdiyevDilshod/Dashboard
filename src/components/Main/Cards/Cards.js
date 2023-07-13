import './Cards.css';

export const Cards = ({ cards }) => {
	return (
		<ul className='cards'>
			{cards.map((card, i) => (
				<li key={i} className='card_item'>
					<h3 className='card_title'>{card.card_name}</h3>
					<p className='card_text'>{card.result}</p>
				</li>
			))}
		</ul>
	);
};
