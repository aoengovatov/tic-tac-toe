import styles from './app.module.css';
import crossImage from './cross.png';
import zeroImage from './zero.png';

const AppLayout = ({ name }) => (
    <div className={styles.container}>
        <div className={styles.appContainer}>
            <div className={styles.title}>{name}</div>
            <div className={styles.board}>
                <div className={`${styles.boardItem} ${styles.winLine}`}>
                    <img src={crossImage} alt="cross"></img>
                </div>
                <div className={styles.boardItem}>
                    <img src={zeroImage} alt="zero"></img>
                </div>
                <div className={styles.boardItem}></div>
                <div className={styles.boardItem}></div>
                <div className={styles.boardItem}></div>
                <div className={styles.boardItem}></div>
                <div className={styles.boardItem}></div>
                <div className={styles.boardItem}></div>
                <div className={styles.boardItem}></div>
            </div>
            <div className={styles.status}>строка состояния</div>
            <button className={styles.button}>новая игра</button>
        </div>
    </div>
);

export const App = () => {
    const name = 'Крестики - нолики';
    return <AppLayout name={name} />;
};
