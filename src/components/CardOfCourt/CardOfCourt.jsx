import { getUrlCourt } from './../../requests/getUrlCourt';
import icon from '../ListOfCourts/img/attention.png';
import site from '../ListOfCourts/img/site.png';
import write from '../ListOfCourts/img/write.png';
import location from '../ListOfCourts/img/location.png';
import s from './CardOfCourt.module.css';

let CardOfCourt = ({item}) => {
    return(
        <>
            <h2>
                {item.B}
            </h2>
            {item.F &&  
                <div className={s.status}>
                    <img 
                        src={icon} 
                        alt='Зображення попередження про статус суду'
                    /> 
                    {item.F}
                </div>
            }
            <div className={s.location}>
                <img 
                    src={location} 
                    alt='Зображення адреси'
                />
                {item.D}
            </div>
                            
            <div className={s.buttons}>
                <a className={s.link} href={getUrlCourt(item.E)} target='_blank'>
                    <img src={site} alt='Зображення кнопки перейти на сайт суду' title='Перейти на сайт суду' />
                </a>
                <a className={s.link} href={`mailto:${item.E}`} target='_blank'>
                    <img src={write} alt='Зображення кнопки надіслати повідомлення на електронну пошту суду' title='Надіслати повідомлення на електронну пошту суду' />
                </a>
            </div>
        </>
    );
};

export default CardOfCourt;