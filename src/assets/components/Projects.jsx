import CardProject from "../components/projects/CardProject";
import '../css/Projects.css';
import axios from "axios";
import { Suspense, lazy, useEffect, useState } from "react";

export default function Projects(){

    /**
     * capture is chrome
     * img_web_capture = {width: 1200px, height: 815px}
     * img_web_compressed = {width: 600px, height: 408px}
     * img_mobile_capture = {width: 375px, height: 667px} mobile Iphone SE
     * img_mobile_compressed = {width: 500px, height: 889px}
    */

    const CardProject = lazy(() => import('./projects/CardProject'));

    const [resource, setResource] = useState([])

    useEffect(() => {
        axios.get('assets/responseProjects.json')
            .then(resp => resp.data)
            .then((resp) => setResource(resp))
    }, [])

    return(
        <Suspense fallback={<div></div>}>
            <section className="container_card_project">
                {
                    resource.map(items => (
                        <CardProject key={items.id}
                            _url_img_web={items._url_img_web}
                            _url_img_mobile={items._url_img_mobile}
                            _title={items._title}
                            _url_code={items._url_code}
                            _url_demo={items._url_demo}
                            _title_btn={items._title_btn}
                        />
                    ))
                }
            </section>
        </Suspense>
    )
}