import './assets/css/Hamburg_menu.css';
import './assets/css/App.css';

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
    </>
  )
}

export default App
