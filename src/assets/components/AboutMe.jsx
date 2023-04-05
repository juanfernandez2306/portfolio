import DocumentText from "../icons/DocumentText";
import Btn from "./utils/Btn";
import '../css/Aboutme.css';

export default function AboutMe(){
    return(
        <section className="aboutMe">
            <figure>
                <img src="assets/img/profile.png" alt="imagen de perfil" />
            </figure>
            <aside>
                <p>Ingeniero geodesta, especialista en Sistemas de Información Geográfico <b>(SIG)</b>, 
                    con +7 de años de experiencia, desarrollando mapas web 
                     interactivos y gestionando  
                     proyectos de base de datos con componente geoespacial para su
                     respectiva representación cartográfica.
                    Apasionado por la ciencia de datos espaciales.
                    <span>&#127757;</span>
                    <span>&#x1F4BB;</span>
                    <span>&#x1F4C8;</span>
                    <span>&#128506;&#65039;</span>
                </p>
                
                <Btn 
                    _url="assets/document/cv.pdf"
                    _text="Resumen curricular"
                    _icon={<DocumentText />}
                    _download={true}
                />
                
            </aside>
        </section>
    );
}