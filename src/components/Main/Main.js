import { Cards } from './Cards';
import { Header } from './Header';
import { Trands } from './Trands';
import { TicketsAndTasks } from './TicketsAndTasks';
import './Main.css';

export const Main = () => {
	const cards = [
		{
			card_name: 'Unresolved',
			result: 60,
		},
		{
			card_name: 'Overdue',
			result: 16,
		},
		{
			card_name: 'Open',
			result: 43,
		},
		{
			card_name: 'On hold',
			result: 64,
		},
	];

	return (
		<div className='component'>
			<Header />
			<Cards cards={cards} />
			<Trands />
			<TicketsAndTasks />
		</div>
	);
};
