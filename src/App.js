import styles from './app.module.css';
import { BoardItem } from './BoardItem';
import { ResultGame } from './ResultGame';
import { Status } from './Status';

const AppLayout = ({ name, resultTitle, endGameFlag, status, statusFlag }) => (
    <div className={styles.container}>
        <div className={styles.appContainer}>
            <div className={styles.title}>{name}</div>
            <div className={styles.board}>
                <BoardItem icon={1} winLine={false} />
                <BoardItem icon={-1} winLine={false} />
                <BoardItem icon={0} winLine={false} />
                <BoardItem icon={0} winLine={false} />
                <BoardItem icon={0} winLine={false} />
                <BoardItem icon={0} winLine={false} />
                <BoardItem icon={0} winLine={false} />
                <BoardItem icon={0} winLine={false} />
                <BoardItem icon={0} winLine={false} />
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
