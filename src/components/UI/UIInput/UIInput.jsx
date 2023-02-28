import s from './UIInput.module.css';
import cross from './img/cross.png';

let UIInput = ({type, placeholder, onChange, value, onClick}) => {
    return(
        <div className={s.wrapper__input}>
            <input 
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className={s.input}
            />

            <img src={cross} alt='Зображення кнопки видалення тексту' onClick={onClick} />
        </div>
    );
};

export default UIInput;