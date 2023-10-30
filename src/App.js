import styles from './app.module.css';
import { BoardItem } from './BoardItem';
import { ResultGame } from './ResultGame';
import { Status } from './Status';
import { useState } from 'react';

let resulTitle = '';
let statusFlag = true;
let boardResult = {};

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
                        winLine={false}
                        id={item}
                        key={item}
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
    const boardItems = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    const resultStatBoard = (event) => {
        const id = event.target.dataset.id;
        if (id) {
            const value = step ? 1 : -1;
            boardResult[id] = value;
            //console.log(boardResult);
            getResultGame(boardResult);
        }
    };

    const getResultGame = (boardResult) => {
        console.log(boardResult);

        if (boardResult[0] === 1 && boardResult[1] === 1 && boardResult[2] === 1) {
            resulTitle = 'Победа крестика!';
            statusFlag = false;
            setEndGameFlag(true);
            //console.log(boardResult);
        }
    };

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
            resultStatBoard={resultStatBoard}
        />
    );
};
