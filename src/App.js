import styles from './app.module.css';
import { BoardItem } from './BoardItem';
import { ResultGame } from './ResultGame';
import { Status } from './Status';
import { useState } from 'react';

let resulTitle = '';
let statusFlag = true;
let boardResult = {};
let boardItems = [
    { id: 0, winLine: false },
    { id: 1, winLine: false },
    { id: 2, winLine: false },
    { id: 3, winLine: false },
    { id: 4, winLine: false },
    { id: 5, winLine: false },
    { id: 6, winLine: false },
    { id: 7, winLine: false },
    { id: 8, winLine: false },
];

const AppLayout = ({
    name,
    resultTitle,
    endGameFlag,
    status,
    statusFlag,
    boardItems,
    step,
    setStep,
    resultStatBoard,
}) => (
    <div className={styles.container}>
        <div className={styles.appContainer}>
            <div className={styles.title}>{name}</div>
            <div
                className={styles.board}
                onClick={(event) => (!endGameFlag ? resultStatBoard(event) : false)}
            >
                {boardItems.map((item) => (
                    <BoardItem
                        winLine={item.winLine}
                        id={item.id}
                        key={item.id}
                        step={step}
                        setStep={setStep}
                        endGameFlag={endGameFlag}
                    />
                ))}
            </div>
            <Status flag={statusFlag} title={status} />
            <ResultGame flag={endGameFlag} title={resultTitle} />
        </div>
    </div>
);

export const App = () => {
    const name = 'Крестики - нолики';
    const [step, setStep] = useState(true);
    const [endGameFlag, setEndGameFlag] = useState(false);

    const resultStatBoard = (event) => {
        const id = event.target.dataset.id;
        if (id) {
            const value = step ? 1 : -1;
            boardResult[id] = value;
            getResultGame(boardResult);
        }
    };

    const checkWin = (boardResult, value) => {
        return (
            (boardResult[0] === value &&
                boardResult[1] === value &&
                boardResult[2] === value) ||
            (boardResult[3] === value &&
                boardResult[4] === value &&
                boardResult[5] === value) ||
            (boardResult[6] === value &&
                boardResult[7] === value &&
                boardResult[8] === value) ||
            (boardResult[0] === value &&
                boardResult[3] === value &&
                boardResult[6] === value) ||
            (boardResult[1] === value &&
                boardResult[4] === value &&
                boardResult[7] === value) ||
            (boardResult[2] === value &&
                boardResult[5] === value &&
                boardResult[8] === value) ||
            (boardResult[0] === value &&
                boardResult[4] === value &&
                boardResult[8] === value) ||
            (boardResult[6] === value &&
                boardResult[4] === value &&
                boardResult[2] === value)
        );
    };

    const getResultGame = (boardResult) => {
        const resultTitles = ['Победа крестика!', 'Победа нолика!', 'Ничья!'];

        if (checkWin(boardResult, 1)) {
            resulTitle = resultTitles[0];
            statusFlag = false;
            setEndGameFlag(true);
        } else if (checkWin(boardResult, -1)) {
            resulTitle = resultTitles[1];
            statusFlag = false;
            setEndGameFlag(true);
        } else if (Object.keys(boardResult).length === 9) {
            resulTitle = resultTitles[2];
            statusFlag = false;
            setEndGameFlag(true);
        }
    };

    const status = step ? 'ходит крестик' : 'ходит нолик';

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
            resultStatBoard={resultStatBoard}
        />
    );
};
