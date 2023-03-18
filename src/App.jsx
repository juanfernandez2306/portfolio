import './assets/css/App.css';
import './assets/components/Header';
import Header from './assets/components/Header';
import Home from './assets/components/Home';
import Projects from './assets/components/Projects';
import Title from './assets/components/Title';
import AboutMe from './assets/components/AboutMe';
import Footer from './assets/components/Footer';
import SwiperCard from './assets/components/SwiperCard';
function App() {

  return (
    <>
    <Header />
    <Home />
    <Title text_title="Proyectos destacados" />
    <Projects />
    <Title text_title="Acerca de mí" />
    <AboutMe />
    <SwiperCard />
    <Footer />
    </>
  )
}

export default App
