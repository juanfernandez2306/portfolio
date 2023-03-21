import { useRef, useState, useEffect } from "react";
import Location from "../icons/Location";
import '../css/Header.css';

function Header(){

    const menuRef = useRef();
    const [menuStatus, setMenuStatus] = useState(false);
    
    const handleClick = (e) => {
        e.preventDefault();
        setMenuStatus(!menuStatus);
        
    };

    const [coordy, setCoordy] = useState(0);
    const [hiddenNav, setHiddenNav] = useState(false);

    const handleScroll = () => {
        const ubicationCurrent = window.pageYOffset;
        const hiddenNavCurrent = ubicationCurrent >= coordy ? true : false;
        setCoordy(ubicationCurrent);
        setHiddenNav(hiddenNavCurrent);

    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, false);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [coordy]);

    const handleClickLink = (e) => {
        const elName = e.target.tagName;
       
        if(elName == 'A'){
            setMenuStatus(!menuStatus);
        }
    }

    return(
        <>
        <nav className={'nav_principal' + (hiddenNav == true ? ' hidden': '')}>
            <main>
                <aside className="logo">
                    <Location />
                    <h1>jfcoordenadas.xyz</h1>
                </aside>
                <ul onClick={handleClickLink} className={"link_menu" + (menuStatus ? " active": "")}>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#projects">Proyectos</a></li>
                    <li><a href="#aboutme">Acerca de mí</a></li>
                    <li><a href="#contact">Escríbeme</a></li>
                </ul>
                <aside className={"container_hamburg_menu" + (menuStatus ? " active": "")}>
                    <a href="#" ref={menuRef} onClick={handleClick} className="hamburg_menu"></a>
                </aside>
            </main>
        </nav>
        </>
    )
}

export default Header;