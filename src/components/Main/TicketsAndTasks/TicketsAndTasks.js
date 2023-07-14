import { Button } from '../../Button';
import './TicketsAndTasks.css';

export const TicketsAndTasks = () => {
	return (
		<div className='TicketsAndTasks'>
			<div className='Tickets box'>
				<div className='desc'>
					<span>
						<h3 className='title'>Unresolved tickets</h3>
						<small className='text'>Group: Support</small>
					</span>
					<Button className='btn'>View details</Button>
				</div>
				<ul className='Tickets_list'>
					<li className='Tickets_item'>
						<p>Waiting on Feature Request</p>
						<span>4238</span>
					</li>
					<li className='Tickets_item'>
						<p>Awaiting Customer Response</p>
						<span>1005</span>
					</li>
					<li className='Tickets_item'>
						<p>Awaiting Developer Fix</p>
						<span>914</span>
					</li>
					<li className='Tickets_item'>
						<p>Pending</p>
						<span>281</span>
					</li>
				</ul>
			</div>
			<div className='Tasks box'>
				<div className='desc'>
					<span>
						<h3 className='title'>Tasks</h3>
						<small className='text'>Today</small>
					</span>
					<Button className='btn'>View all</Button>
				</div>
			</div>
		</div>
	);
};
