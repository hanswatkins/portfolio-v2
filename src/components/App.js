import Header from './Header';
import Footer from './Footer';
import '../stylesheets/App.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className='App'>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
