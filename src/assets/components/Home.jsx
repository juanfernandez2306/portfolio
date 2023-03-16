import TypedText from './TypedText';
import MapD3 from './MapD3';

export default function Home(){
    return(
        <section className="home" id="home">
            <aside className="welcome">
                <h4>
                    <span className="rotate_center">
                        &#128075;
                    </span>
                    ¡Hola!, mi nombre es
                </h4>
                <h2>Juan Fernández</h2>
            </aside>
            <TypedText />
            <MapD3 />
        </section>
    )
}