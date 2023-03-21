import Code from '../../icons/Code';
import Eyes from '../../icons/Eyes';
import Btn from '../utils/Btn';

export default function CardProject({
    _url_img_web, 
    _url_img_mobile, 
    _title, 
    _url_demo, 
    _url_code, 
    _title_btn
}){
    return(
        <article className="card_project">
            <picture>
                <source srcSet={_url_img_mobile} media="(max-width: 450px)" />
                <img src={_url_img_web} alt="" />
            </picture>
            <h3>{_title}</h3>
            <aside className="container_btn">
                <Btn 
                    _icon={<Eyes />}
                    _text={_title_btn}
                    _url={_url_demo}
                />
                <Btn 
                    _icon={<Code />}
                    _text="Codigo"
                    _url={_url_code}
                    _className="secondary"
                />
            </aside>
        </article>
    )
} 