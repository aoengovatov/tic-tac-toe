import styles from './app.module.css';
import { BoardItem } from './BoardItem';
import { ResultGame } from './ResultGame';
import { Status } from './Status';
import { useState } from 'react';

const AppLayout = ({
    name,
    resultTitle,
    endGameFlag,
    status,
    statusFlag,
    boardItems,
    step,
    setStep,
}) => (
    <div className={styles.container}>
        <div className={styles.appContainer}>
            <div className={styles.title}>{name}</div>
            <div className={styles.board}>
                {boardItems.map((item) => (
                    <BoardItem
                        winLine={false}
                        id={item}
                        key={item}
                        step={step}
                        setStep={setStep}
                    />
                ))}
            </div>
            <Status flag={statusFlag} title={status} />
            <ResultGame flag={endGameFlag} title={resultTitle} />
        </div>
    </div>
);

export const App = () => {
    let resulTitle = 'Победа крестика!';
    let endGameFlag = false;
    let statusFlag = true;
    const name = 'Крестики - нолики';
    const [step, setStep] = useState(true);
    const boardItems = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    const getStatus = (step) => {
        return step ? 'ходит крестик' : 'ходит нолик';
    };

    const status = getStatus(step);

    return (
        <AppLayout
            name={name}
            resultTitle={resulTitle}
            endGameFlag={endGameFlag}
            status={status}
            statusFlag={statusFlag}
            boardItems={boardItems}
            step={step}
            setStep={setStep}
        />
    );
};
