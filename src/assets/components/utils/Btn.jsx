import { useRef, useEffect, useState } from "react"
import '../../css/Btn.css';

export default function Btn({
    _url,
    _className = 'primary',
    _icon,
    _text,
    _download = false,
}){
    const linkRef = useRef();

    useEffect(() => {
        const linkEl = linkRef.current;

        if(_download){
            linkEl.download = _url;
        }

    }, [])

    const [disabled, setDisabled] = useState(false);

    const handleClick = (e) => {
        setDisabled(true);

        setTimeout(() => {
            setDisabled(false);
        }, 5000);
    }

    return(
        <a onClick={handleClick} ref={linkRef} 
            href={_url}
            className={'btn' + ' ' + _className + (disabled ? ' disabled': '')} 
            target="_blank" >
            {_icon}
            <span>{_text}</span>
        </a>
    )
}