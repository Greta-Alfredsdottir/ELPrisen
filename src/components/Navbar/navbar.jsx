import { Link } from "react-router";
import navIcon from "../../assets/icon/navIcon.svg"
import style from './navbar.module.scss';
export function Navbar() {
    return(
        <nav className={style.navStyling}>
            <img src={navIcon} alt="Navigation icon" />
            <div>
                <Link to="/oversigt">Oversigt</Link>
                <Link to="/">Lige Nu</Link>
                <Link to="/history">History</Link>
            </div>
        </nav>
    )
}