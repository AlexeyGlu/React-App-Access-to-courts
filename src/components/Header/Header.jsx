import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import icon from './img/court.png';
import burgerMenu from './img/menu.png';
import MenuBurger from '../MenuBurger';

let Header = () => {

    let [menu, setMenu] = useState(false);
    let [menuButton, setMenuButton] = useState(true);

    let handleMenu = () => {
        if (menuButton) {
            setMenu(true);
            setMenuButton(false);
        } else {
            setMenu(false);
            setMenuButton(true);
        }
    }

    return(
        <nav className={s.navbar}>
            <img className={s.icon} src={icon} alt='Зображення сайту' />
            <ul className={s.navbar__list}>
                <li className={s.navbar__item}><NavLink to='/'>Головна</NavLink></li>
                <li className={s.navbar__item}><NavLink to='/instance'>Судові інстанції</NavLink></li>
                <li className={s.navbar__item}><NavLink to='/judges'>Список суддів</NavLink></li>
            </ul>

            { menuButton && <img className={s.menu__burger} src={burgerMenu} alt='Меню' onClick={handleMenu}/> }
          
            { menu && <MenuBurger handleMenu={handleMenu} /> }
        </nav>
    );
};

export default Header;