import FormFormik from './footer/FormFormik';
import SwiperCard from './footer/SwiperCard';

import Twitter from '../icons/Twitter';
import Github from '../icons/Github';

import '../css/Footer.css';
import { useState } from 'react';
import PopupAlert from './utils/popupAlert';

export default function Footer(){

    const [popupStatus, setpopupState] = useState(false);
    const [styleResponse, setStyleResponse] = useState('');
    const [respServer, setResponseServer] = useState(false);
    
    return(
        <>
        <PopupAlert 
            popupStatus={popupStatus}
            setpopupState={setpopupState}
            respServer={respServer}
            setResponseServer={setResponseServer}
            styleResponse={styleResponse}
            setStyleResponse={setStyleResponse}
        />
        <footer className="footer" id="contact" >
            <SwiperCard />
            <aside className="title_footer">
                <h3>¿Tienes algún proyecto?</h3>
                <h1>Estoy disponible como programador SIG</h1>
            </aside>
            <FormFormik 
                setpopupState={setpopupState}
                setResponseServer={setResponseServer}
                setStyleResponse={setStyleResponse}
            />
            <section className='footer_rrss'>
                <aside className="rrss">
                    <h3>Mis redes sociales</h3>
                    <a href="https://twitter.com/juancho_2306" target="_blank">
                        <Twitter />
                        <span>Twitter</span>
                    </a>
                    <a href="https://github.com/juanfernandez2306/" target="_blank">
                        <Github />
                        <span>Github</span>
                    </a>
                </aside>
                <p className='phrases'><q cite='https://www.youtube.com/watch?v=l7EzFlplgd4'>Saber dónde están las cosas y el porqué, es esencial para la toma racional de decisiones</q> Jack Dangermond</p>
            </section>
        </footer>
        </>
    )
}