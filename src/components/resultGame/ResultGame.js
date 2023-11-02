import styles from './resultGame.module.css';

const ResultGameLayout = ({ title, resetClick }) => (
    <div className={styles.endContainer}>
        <div className={styles.endTitle}>{title}</div>
        <button className={styles.button} onClick={resetClick}>
            новая игра
        </button>
    </div>
);

export const ResultGame = ({ flag, title, resetClick }) => {
    return flag ? <ResultGameLayout title={title} resetClick={resetClick} /> : false;
};
