import styles from './resultGame.module.css';

const ResultGameLayout = ({ title, setNewGame }) => (
    <div className={styles.endContainer}>
        <div className={styles.endTitle}>{title}</div>
        <button className={styles.button} onClick={() => setNewGame(true)}>
            новая игра
        </button>
    </div>
);

export const ResultGame = ({ flag, title, setNewGame }) => {
    return flag ? <ResultGameLayout title={title} setNewGame={setNewGame} /> : false;
};
