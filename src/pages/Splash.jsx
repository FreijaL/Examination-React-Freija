import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import style from './Splash.module.scss'

function Splash() {
    const navigate = useNavigate();
    
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home')
        }, 1000)
        return () => clearTimeout(timer)
    })

    return ( 
        <main className={style.splashMain}>
            <img className={style.logo} src="../../public/svg/Arabian-Horse-Silhouette.svg" />
            <h1>Welcome to<br/>Harmony Horse</h1>
        </main>
     );
}

export default Splash;