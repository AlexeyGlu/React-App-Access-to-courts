import React, { useEffect, useState, Suspense } from 'react';
import s from './ListOfCourts.module.css';
import UIInput from '../UI/UIInput';
import UILoading from '../UI/UILoading';

let CardOfCourt = React.lazy( () => import('../CardOfCourt'));
let CardOfCommonCourt = React.lazy( () => import('../CardOfCommonCourt'));

let ListOfCourts = ({listCourts}) => {

    let [filterListCourts, setFilterListCourts] = useState([]);
    let [value, setValue] = useState('');

     useEffect( () => {
        if (!value) {
            setFilterListCourts(listCourts);
        } else {
            let filterCourts = listCourts.filter(item => 
                (typeof(item.B) === 'string')
                ? (item.B).toLowerCase().includes(value.toLowerCase())
                : (item.A).toLowerCase().includes(value.toLowerCase())
            )
            setFilterListCourts(filterCourts)
        }
     }, [value, listCourts])

    return(

        <div className={s.wrapper}> 
            <UIInput 
                type='text' 
                placeholder='Введіть назву суду' 
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onClick={() => setValue('')}
            />

            {filterListCourts.map((item, index) => (
                <div className={s.container} key={index}>
                    {
                        (typeof(item.B) === 'string') 
                        ? <Suspense fallback={<UILoading />}>
                            <CardOfCourt item={item} />
                          </Suspense>
                        : <Suspense fallback={<UILoading />}>
                           <CardOfCommonCourt item={item} />
                          </Suspense>
                    }              
                </div>
            ))
        }</div>
    );
};

export default ListOfCourts;