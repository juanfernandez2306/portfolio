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
            <li><a href="#">Acerca de mi</a></li>
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
      <div className="container_portfolio"></div>
      <div className="container_contact"></div>
    </>
  )
}

export default App
