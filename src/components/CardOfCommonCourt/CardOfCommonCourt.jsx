import s from './CardOfCommonCourt.module.css';
import { getUrlCourt } from './../../requests/getUrlCourt';
import icon from '../ListOfCourts/img/attention.png';
import site from '../ListOfCourts/img/site.png';
import write from '../ListOfCourts/img/write.png';
import location from '../ListOfCourts/img/location.png';
import cancel from '../ListOfCourts/img/cancel.png';

let CardOfCommonCourt = ({item}) => {
    return(
        <>
            <h2>{item.A}</h2> 
            { item.E && 
            (<div className={s.status}>
                <img src={icon} alt='Зображення попередження про статус суду' /> 
                {item.E}
            </div>)
            }
            
            {(item.E) 
              ? (<div className={s.cancel}><img src={cancel} alt='Зображення про відсутність інформації' />Відсутня офіційна інформація про діяльність суду</div>)
              : (<>
                <div className={s.location}>
                    <img src={location} alt='Зображення адреси' />{item.C}
                </div>
                <div className={s.buttons}>
                    <a className={s.link} href={getUrlCourt(item.D)} target='_blank'>
                        <img src={site} alt='Зображення кнопки перейти на сайт суду' title='Перейти на сайт суду' />
                    </a>
                    <a className={s.link} href={`mailto:${item.D}`} target='_blank'>
                        <img src={write} alt='Зображення кнопки надіслати повідомлення на електронну пошту суду' title='Надіслати повідомлення на електронну пошту суду' />
                    </a>
                </div>
                </>)
            }
        </>
    );
};

export default CardOfCommonCourt;