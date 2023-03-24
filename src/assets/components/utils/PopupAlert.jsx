import { useState } from 'react';
import '../../css/PopupAlert.css';

export default function PopupAlert({
    popupStatus, 
    setpopupState, 
    respServer, 
    setResponseServer, 
    styleResponse,
    setStyleResponse
}){
    const [out, setOut] = useState(false);

    const handleClick = () => {
        setOut(true);

        setTimeout(() => {
            setResponseServer(false);
            setStyleResponse('');
            setpopupState(false);
            setOut(false);
        }, 700);
    }

    return(
        <aside 
            className={'response_preloader' + (popupStatus ? ' show' : ' hide') + (out ? ' out' : '')}>
            <div className={'preloader_wallpaper' + styleResponse}>
                <label>
                    <div className="check-icon"></div>
                </label>
                <h3><span>Espere un momento</span></h3>
                <button 
                    onClick={handleClick}
                    className={respServer ? '' : 'disabled'}
                >Continuar</button>
            </div>
        </aside>
    )
}