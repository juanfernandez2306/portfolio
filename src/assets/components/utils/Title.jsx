import '../../css/Title.css';

export default function Title({text_title, name_id}){
    return(
        <section className="title" id={name_id}>
            <h2>{text_title}</h2>
        </section>
    );
}