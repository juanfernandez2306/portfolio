import CardProject from "./Card";

export default function Projects(){
    return(
        <section className="projects">
            <CardProject 
                title="localiza tu establecimiento de salud" 
                url_img="/overview/cercania_centro_salud_2.gif"
                url_demo="https://jfcoordenadas.xyz/cercania_centro_salud/"
                url_code="https://github.com/juanfernandez2306/cercania_centro_salud"
            />
        </section>
    )
}