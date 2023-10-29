import styles from './resultGame.module.css';

const ResultGameLayout = ({ title }) => (
    <div className={styles.endContainer}>
        <div className={styles.endTitle}>{title}</div>
        <button className={styles.button}>новая игра</button>
    </div>
);

export const ResultGame = ({ flag, title }) => {
    return flag ? <ResultGameLayout title={title} /> : false;
};
