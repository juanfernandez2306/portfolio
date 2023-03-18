import SwiperCard from './SwiperCard';
import FormFormik from './FormFormik';
import Twitter from '../icons/Twitter';
import Github from '../icons/Github';

export default function Footer(){
    return(
        <footer className="footer">
            <aside className="title_footer">
                <h3>¿Tienes algún proyecto?</h3>
                <h1>Estoy disponible como programador SIG</h1>
            </aside>
            <FormFormik />
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
    )
}