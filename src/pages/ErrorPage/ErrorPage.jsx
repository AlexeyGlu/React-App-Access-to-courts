import {Link} from 'react-router-dom';
import s from './ErrorPage.module.css';

let ErrorPage = () => {
    return(
        <div className={s.container}>
            <h2>Сторінку не знайдено</h2>
            <Link className={s.link} to='/'>Повернутися на головну сторінку</Link>
        </div>
    );
};

export default ErrorPage;