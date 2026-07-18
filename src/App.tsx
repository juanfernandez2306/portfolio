import './App.css';

import Hero from './assets/features/Hero/Hero';
import Experience from './assets/features/Experience/Experience';
import Projects from './assets/features/Projects/Projects';
import { AboutMe } from './assets/features/AboutMe/AboutMe';

import styles from './main.module.css';

function App() {
  

  return (
   
   <main className={styles.main}>
      <Hero /> 
      <Experience />
      <Projects />
      <AboutMe />
   </main>
   
  )
}

export default App
