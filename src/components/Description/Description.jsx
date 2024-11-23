import style from './Description.module.css';

const Description = () => {
    return (
        <div className={style.head}>
            <h1 className={style.title}>
                <span>Sip</span> Happens <span>Café</span>
            </h1>
            <p className={style.text}>
                Please leave your feedback about our service by selecting one of
                the options below.
            </p>
        </div>
    );
};

export default Description;
