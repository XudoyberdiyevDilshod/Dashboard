import './Trands.css';

export const Trands = () => {
	const info = [
		{
			info_name: 'Resolved',
			result: '449',
		},
		{
			info_name: 'Received',
			result: '429',
		},
		{
			info_name: 'Average first response time',
			result: '33m',
		},
		{
			info_name: 'Average response time',
			result: '3h 8m',
		},
		{
			info_name: 'Resolution within SLA',
			result: '94 %',
		},
	];

	return (
		<div className='trands'>
			<div className='trands_left'>
				<h3 className='trands_title'>Today’s trends</h3>
				<div className='trands_desc'>
					<p className='trands_text'>as of 25 May 2019, 09:41 PM</p>
					<span className='day'>
						<small>- Today</small>
						<small>- Yesterday</small>
					</span>
				</div>
			</div>
			<div className='trands_right'>
				<ul className='trands_cards'>
					{info.map((item, i) => (
						<li key={i} className='trands_item'>
							<strong className='name'>{item.info_name}</strong>
							<span className='result'>{item.result}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
