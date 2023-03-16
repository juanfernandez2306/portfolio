import Code from '../icons/Code';
import Eyes from '../icons/Eyes'

export default function CardProject({url_img, title, url_demo, url_code, title_btn}){
    return(
        <article className="card_project">
            <aside className="container_img">
                <img src={url_img} alt="" />
            </aside>
            <h3>{title}</h3>
            <aside className="container_btn">
                <a href={url_demo} target="_blank" className='btn_eyes'>
                    <Eyes />
                    <span>{title_btn || 'Demo'}</span>
                </a>
                <a href={url_code} target="_blank" className='btn_code'>
                    <Code />
                    <span>Codigo</span>
                </a>
            </aside>
        </article>
    )
} 