import style from './Button.module.scss'

function Button({action, title}) {

    return ( 
        <>
            <button className={style.button} onClick={(e) => {action(e)}} >{title}</button>
        </>
     );
}


export default Button;