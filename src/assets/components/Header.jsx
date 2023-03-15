function Header(){
    return(
        <>
        <header className="header_principal">
            <aside className="logo">
                <h1>jfcoordenadas.xyz</h1>
            </aside>
            <ul className="links">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Proyectos</a></li>
                <li><a href="#">Acerca de mí</a></li>
                <li><a href="#">Escríbeme</a></li>
            </ul>
            <aside className="container_hamburg_menu">
                <a href="#" className="hamburg_menu"></a>
            </aside>
        </header>
        </>
    )
}

export default Header;