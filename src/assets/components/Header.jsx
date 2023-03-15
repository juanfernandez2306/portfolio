import { useRef, useState } from "react";
import Location from "../icons/Location";
function Header(){

    const menuRef = useRef();
    const [menuStatus, setMenuStatus] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setMenuStatus(!menuStatus);
        
    };

    return(
        <>
        <header className="header_principal">
            <aside className="logo">
                <Location />
                <h1>jfcoordenadas.xyz</h1>
            </aside>
            <ul className={"link_menu" + (menuStatus ? " active": "")}>
                <li><a href="/">Inicio</a></li>
                <li><a href="#">Proyectos</a></li>
                <li><a href="#">Acerca de mí</a></li>
                <li><a href="#">Escríbeme</a></li>
            </ul>
            <aside className={"container_hamburg_menu" + (menuStatus ? " active": "")}>
                <a href="#" ref={menuRef} onClick={handleClick} className="hamburg_menu"></a>
            </aside>
        </header>
        </>
    )
}

export default Header;