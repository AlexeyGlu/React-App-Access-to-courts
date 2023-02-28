import s from './UIButton.module.css';

let UIButton = ({children, onClick}) => {
    return(
        <button className={s.button} onClick={onClick}>
            <span>{children}</span>
        </button>
    );
};

export default UIButton;