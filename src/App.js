import styles from './app.module.css';
import crossImage from './cross.png';
import zeroImage from './zero.png';
import { BoardItem } from './BoardItem';
import { ResultGame } from './ResultGame';
import { Status } from './Status';

const AppLayout = ({ name, resultTitle, endGameFlag, status, statusFlag }) => (
    <div className={styles.container}>
        <div className={styles.appContainer}>
            <div className={styles.title}>{name}</div>
            <div className={styles.board}>
                <div className={`${styles.boardItem} ${styles.winLine}`}>
                    <img className={styles.imageCross} src={crossImage} alt="cross"></img>
                </div>
                <div className={styles.boardItem}>
                    <img className={styles.imageZero} src={zeroImage} alt="zero"></img>
                </div>
                <BoardItem />
                <BoardItem />
                <BoardItem />
                <BoardItem />
                <BoardItem />
                <BoardItem />
                <BoardItem />
            </div>
            <Status flag={statusFlag} title={status} />
            <ResultGame flag={endGameFlag} title={resultTitle} />
        </div>
    </div>
);

export const App = () => {
    const resulTitle = 'Победа крестика!';
    const endGameFlag = false;
    const statusFlag = true;
    const name = 'Крестики - нолики';
    const status = 'ходит крестик';
    return (
        <AppLayout
            name={name}
            resultTitle={resulTitle}
            endGameFlag={endGameFlag}
            status={status}
            statusFlag={statusFlag}
        />
    );
};
