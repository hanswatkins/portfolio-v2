import Footer from './Footer';
import '../stylesheets/App.css';
import Home from './Home';
import About2 from './About2';
import About3 from './About3';
import Projects from './Projects';
import Contact from './Contact';

function App() {
	return (
		<div className='App'>
			<Home />
			<About2 />
			<About3 />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
