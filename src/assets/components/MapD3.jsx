import { useRef } from "react";

function MapD3(){
    const svg_ref = useRef();

    return(
        <aside id="map">
            <svg ref={svg_ref}></svg>
        </aside>
    );
}