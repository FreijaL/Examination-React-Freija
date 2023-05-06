import style from './Footer.module.scss'

function Footer() {
    return ( 
        <footer className={style.footer}>
            <p>&copy; Copyrights 2023 by Freija Lindkvist</p>
            <p>Examination ramverk-react-redux </p>
        </footer>
     );
}

export default Footer;