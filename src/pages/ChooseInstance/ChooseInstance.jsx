import { useState } from 'react';
import SelectInstance from '../../components/SelectInstance/SelectInstance';
import SelectCommonCourts from './../../components/SelectCommonCourts';
import ListOfCourts from './../../components/ListOfCourts';
import s from './ChooseInstance.module.css';

let ChooseInstance = () => {

    let [listCourts, setListCourts] = useState([]);
    let [commonCourt, setCommonCourt] = useState(false);
    let [info, setInfo] = useState(false);
    console.log(listCourts);
    return(
        <div className={s.wrapper}>
            <h1>Оберіть інстанцію</h1>
        
            <SelectInstance 
                setCommonCourt={setCommonCourt} 
                setInfo={setInfo} 
                setListCourts={setListCourts} 
            />

            <div className={s.container}>
            {commonCourt && 
            <SelectCommonCourts 
                setCommonCourt={setCommonCourt} 
                setInfo={setInfo} 
                setListCourts={setListCourts} 
            />} 
            </div>
            <div className={s.container}>
            { info && 
            <ListOfCourts 
                listCourts={listCourts} 
            />} 
            </div>
        </div>
    );
};

export default ChooseInstance;