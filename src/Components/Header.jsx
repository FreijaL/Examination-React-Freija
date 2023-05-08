import style from './Header.module.scss'

function Header({action}) {
    return ( 
        <header className={style.header}>
            <section className={style.svgContainer}>
                <img className={style.svg} src='/svg/menu-svgrepo-com.svg' />
            </section>
            <h1 onClick={action}>Harmony Horse</h1>
        </header>
     );
}

export default Header;