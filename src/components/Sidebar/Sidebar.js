import React from 'react';
import './Sidebar.css';
import {
	Agents,
	Articles,
	Contacts,
	Ideas,
	Logo,
	Overview,
	Tickets,
} from '../../assets/images';

export const Sidebar = () => {
	const navbarList = [
		{
			icon: <Overview />,
			name: 'Overview',
		},
		{
			icon: <Tickets />,
			name: 'Tickets',
		},
		{
			icon: <Ideas />,
			name: 'Ideas',
		},
		{
			icon: <Contacts />,
			name: 'Contacts',
		},
		{
			icon: <Agents />,
			name: 'Agents',
		},
		{
			icon: <Articles />,
			name: 'Articles',
		},
	];

	return (
		<div className='sidebar'>
			<div className='logo'>
				<Logo />
				<strong className='logo-text'>Dashboard Kit</strong>
			</div>
			<nav className='nav'>
				<ul className='nav__list'>
					{navbarList.map((item, i) => (
						<li key={i} className='nav__item'>
							{item.icon}
							<h2 className='item-name'>{item.name}</h2>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};
