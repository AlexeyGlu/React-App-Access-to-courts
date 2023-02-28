import * as con from '../../constants/addresses';
import {getListCourts} from '../../requests/getListCourts';
import UIButton from './../UI/UIButton';

let SelectCommonCourts = ({setCommonCourt, setInfo, setListCourts}) => {

let getCourts = (url) => {
        getListCourts(url).then(res => setListCourts(res));
        setCommonCourt(false);
        setInfo(true);
    }

    return(
        <>
        <UIButton onClick={() => getCourts(con.COMMON_COURTS_KYIV)}>м. Київ</UIButton>
                <UIButton onClick={() => getCourts(con.COMMON_COURTS_VINNYTSKA)}>Вінницька область</UIButton>
                <UIButton onClick={() => getCourts(con.COMMON_COURTS_VOLYNSKA)}>Волинська область</UIButton>
                <UIButton onClick={() => getCourts(con.COMMON_COURTS_DNIPROPETROVSKA)}>Дніпропетровська область</UIButton>
                <UIButton onClick={() => getCourts(con.COMMON_COURTS_DONETSKA)}>Донецька область</UIButton>
                <UIButton onClick={() => getCourts(con.COMMON_COURTS_ZHYTOMYRSKA)}>Житомирська область</UIButton>
                <UIButton onClick={() => getCourts(con.COMMON_COURTS_ZAKARPATSKA)}>Закарпатська область</UIButton>
                <UIButton onClick={() => getCourts(con.COMMON_COURTS_ZAPORIZHZKA)}>Запорізька область</UIButton>
                <UIButton onClick={() => getCourts(con.COMMON_COURTS_IVANO_FRANKIVSKA)}>Івано-Франківська область</UIButton>
                <UIButton onClick={() => getCourts(con.COMMON_COURTS_KYIVSKA)}>Київська область</UIButton>
                <UIButton onClick={() => getCourts(con.COMMON_COURTS_KIROVOGRADSKA)}>Кіровоградська область</UIButton>
                <UIButton onClick={() => getCourts(con.COMMON_COURTS_LUHANSKA)}>Луганська область</UIButton>
                <UIButton onClick={() => getCourts(con.COMMON_COURTS_LVIVSKA)}>Львівська область</UIButton>
                <UIButton onClick={() => getCourts(COMMON_COURTS_MYKOLAIVSKA)}>Миколаївська область</UIButton>
                <UIButton onClick={() => getCourts(con.COMMON_COURTS_ODESKA)}>Одеська область</UIButton>
                <UIButton onClick={() => getCourts(con.COMMON_COURTS_POLTAVSKA)}>Полтавська область</UIButton>
                <UIButton onClick={() => getCourts(con.COMMON_COURTS_RIVNENSKA)}>Рівненська область</UIButton>
                <UIButton onClick={() => getCourts(con.COMMON_COURTS_SUMSKA)}>Сумська область</UIButton>
                <UIButton onClick={() => getCourts(con.COMMON_COURTS_TERNOPILSKA)}>Тернопільська область</UIButton>
                <UIButton onClick={() => getCourts(con.COMMON_COURTS_KHARKIVSKA)}>Харківська область</UIButton>
                <UIButton onClick={() => getCourts(con.COMMON_COURTS_KHERSONSKA)}>Херсонська область</UIButton>
                <UIButton onClick={() => getCourts(con.COMMON_COURTS_KHMELNITSKA)}>Хмельницька область</UIButton>
                <UIButton onClick={() => getCourts(con.COMMON_COURTS_CHERKASKA)}>Черкаська область</UIButton>
                <UIButton onClick={() => getCourts(con.COMMON_COURTS_CHERNIVETSKA)}>Чернівецька область</UIButton>
                <UIButton onClick={() => getCourts(con.COMMON_COURTS_CHERNIGIVSKA)}>Чернігівська область</UIButton>
        </>
    );
};

export default SelectCommonCourts;