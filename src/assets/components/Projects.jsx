import CardProject from "./Card";

export default function Projects(){
    /**
     * capture is chrome
     * img_web_capture = {width: 1200px, height: 815px}
     * img_web_compressed = {width: 600px, height: 408px}
     * img_mobile_capture = {width: 375px, height: 667px} mobile Iphone SE
     * img_mobile_compressed = {width: 500px, height: 889px}
    */

    return(
        <section className="container_card_project">
            <CardProject 
                title="Mapa sanitario Zulia" 
                url_img_web="/overview/mapa_sanitario_zulia.gif"
                url_img_mobile="/overview/mapa_sanitario_zulia_mobile.gif"
                url_demo="https://jfcoordenadas.xyz/mapa_zulia/"
                url_code="https://github.com/juanfernandez2306/map_leaflet_simple"
            />
           <CardProject 
                url_img_mobile="/overview/cercania_centro_salud_mobile.gif"
                url_img_web="/overview/cercania_centro_salud.gif"
                title="Cercania centro de salud zulia"
                url_demo="https://jfcoordenadas.xyz/cercania_centro_salud/"
                url_code="https://github.com/juanfernandez2306/cercania_centro_salud"
           /> 
           <CardProject 
                url_img_web="/overview/mapa_covid.gif"
                url_img_mobile="/overview/mapa_covid_mobile.gif"
                url_demo="https://jfcoordenadas.xyz/mapa_covid/"
                url_code="https://github.com/juanfernandez2306/mapa_covid"
                title="Mapa COVID19 Zulia"
           />
        </section>
    )
}