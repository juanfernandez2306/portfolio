import Typed from "typed.js";
import {useEffect, useRef} from 'react';

function TypedText(){

    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const option_typed = {
            strings : ['Desarrollador Web SIG', 'Analista SIG', 'Cartógrafo'],
            typeSpeed: 75,
            startDeley: 300,
            backSpeed: 75,
            backDeley: 1200,
            loop: true,
            loopCount: false,
            showCursor: true,
            cursorChar: '|'
        }

        typed.current = new Typed(el.current, option_typed);

        return () => {
            typed.current.destroy();
        }
    }, []);

    return(
        <section className="container_typed">
            <span className="typed" ref={el} />
        </section>
    )
}

export default TypedText;