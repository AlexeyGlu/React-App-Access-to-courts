import * as con from '../../constants/addresses';
import {getListCourts} from '../../requests/getListCourts';
import UIButton from './../UI/UIButton';
import s from './SelectInstance.module.css'

let SelectInstance = ({setCommonCourt, setInfo, setListCourts}) => {

    let getCourts = (url) => {
        getListCourts(url).then(res => setListCourts(res));
        setCommonCourt(false);
        setInfo(true);
    }
    
    return(
        <div className={s.wrapper}>
            <UIButton onClick={() => {
                setCommonCourt(true);
                setInfo(false);
            }}>Місцеві загальні суди</UIButton>
            <UIButton onClick={() => getCourts(con.ADMINISTRATIVE_COURTS)}>Окружні адміністративні суди</UIButton>
            <UIButton onClick={() => getCourts(con.COMMERCIAL_COURTS)}>Окружні господарські суди</UIButton>
            <UIButton onClick={() => getCourts(con.APPEAL_COMMON_COURTS)}>Апеляційні суди</UIButton>
            <UIButton onClick={() => getCourts(con.APPEAL_ADMINISTRATIVE_COURTS)}>Апеляційні адміністративні суди</UIButton>
            <UIButton onClick={() => getCourts(con.APPEAL_COMMERCIAL_COURTS)}>Апеляційні господарські суди</UIButton>
        </div>
    );
};

export default SelectInstance;