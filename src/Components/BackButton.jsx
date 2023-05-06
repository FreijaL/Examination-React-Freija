import style from './BackButton.module.scss'

function BackButton({action}) {
    return ( 
        <button className={style.backButton} onClick={action}>Back</button>
     );
}

export default BackButton;