import './assets/css/App.css';
import './assets/components/Header';
import Header from './assets/components/Header';
import Home from './assets/components/Home';
import Projects from './assets/components/Projects';
import Title from './assets/components/Title';
import AboutMe from './assets/components/AboutMe';
import Footer from './assets/components/Footer';

function App() {

  return (
    <>
    <Header />
    <Projects />
    <Title text_title="Acerca de mí" />
    <AboutMe />
    <Footer />
    </>
  )
}

export default App
