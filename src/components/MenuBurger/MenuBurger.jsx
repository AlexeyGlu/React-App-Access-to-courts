import s from './MenuBurger.module.css';
import { NavLink } from 'react-router-dom';

let MenuBurger = ({handleMenu}) => {
    return (
        <div className={s.links} onClick={handleMenu}>
            <NavLink to='/'>
                Головна
            </NavLink>
            <NavLink to='/instance'>
                Судові інстанції
            </NavLink>
            <NavLink to='/judges'>
                Список суддів
            </NavLink>
        </div>
    );
};

export default MenuBurger;