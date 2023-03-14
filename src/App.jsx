import './assets/css/Hamburg_menu.css';
import './assets/css/App.css';
import TypedText from './assets/components/TypedText';
import MapD3 from './assets/components/MapD3';

function App() {

  return (
    <>
      <div className="container_header">
        <header>
          <aside>
            <h1>jfcoordenadas</h1>
          </aside>
          <ul className="menu_link">
            <li><a href="#">Acerca de mí</a></li>
            <li><a href="#">Portafolio</a></li>
            <li><a href="#">Escríbeme</a></li>
          </ul>
          <aside className="container_hamburg_menu">
            <a href="#" className="hamburg_menu"></a>
          </aside>
        </header>
      </div>
      <div className="container_main">
        <main>
          <aside>
            <section className='container_main_text'>
              <h4>
                <span className='rotate_center'>&#128075;</span> ¡Hola!, mi nombre es
              </h4>
              <h1>Juan Fernández</h1>
            </section>
            <TypedText />
          </aside>
          <MapD3 />
        </main>
      </div>
      <div className="container_about_me">
        <section className='about_me'>
            <aside className='container_profile'>
              <img src="/img/1674673086020.png" alt="profile" />
            </aside>
            <aside className='title_about'>
              <h3>Acerca de mí</h3>
            </aside>
            <aside className='container_text_about'>
              <p><span>&#x1F468;&#x200D;&#x1F4BC;</span> Ingeniero geodesta especializado en Sistemas de Información Geográfica (SIG o GIS por su acrónimo en inglés) con sólidos conocimientos en desarrollo de aplicaciones web de mapas basados en mejorar la experiencia visual del usuario. Apasionado por las ciencias de datos espaciales.
              <span>&#x1F30D;</span>
              <span>&#x1F4BB;</span>
              <span>&#x1F4C8;</span>
              <span>&#128506;&#65039;</span>
              </p>
            </aside>
            <section className="skill">
              skill
            </section>
        </section>
      </div>
      <div className="container_contact"></div>
    </>
  )
}

export default App
