import { useState } from 'react';
import './assets/css/App.css';
import './assets/components/Header';
import Header from './assets/components/Header';
import Home from './assets/components/Home';
import Projects from './assets/components/Projects';
import Title from './assets/components/utils/Title';
import AboutMe from './assets/components/AboutMe';
import Footer from './assets/components/Footer';

function App() {
  const [navStatus, setNavStatus] = useState(false);
  
  return (
    <>
    <Header />
    <Home />
    <Title name_id="projects" text_title="Proyectos destacados" />
    <Projects />
    <Title name_id="aboutme" text_title="Acerca de mí" />
    <AboutMe />
    <Footer />
    </>
  )
}

export default App
