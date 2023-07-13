import { IconN, Search } from '../../../assets/images';
import './Header.css';
import avatar from '../../../assets/images/avatar.png';

export const Header = () => {
	return (
		<header className='site-header'>
			<div className='site-title'>
				<h1 className='title'>Overview</h1>
			</div>
			<div className='icons'>
				<Search />
				<IconN />
			</div>
			<small className='avatar-name'>Jones Ferdinand</small>
			<img src={avatar} alt='avatar' width={40} height={40} />
		</header>
	);
};
