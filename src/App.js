import './assets/styles/main.css';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main/Main';

function App() {
	return (
		<div className='app'>
			<div className='container'>
				<Sidebar />
				<Main />
			</div>
		</div>
	);
}

export default App;
