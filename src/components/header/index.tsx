import styles from './header.module.css'
import logoImg from '../../assets/Erick_Criptos.png'
import { Link } from 'react-router-dom'

export function Header(){
    return(
        <header className={styles.container}>
           <Link to="/">
           <img src={logoImg} alt='logo Cripto App'/>
           </Link>
        </header>
    )
}