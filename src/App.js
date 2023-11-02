import PropTypes from 'prop-types';
import styles from './app.module.css';
import { BoardItem } from './components/boardItem/BoardItem';
import { Status } from './components/status/Status';
import { ResultGame } from './components/resultGame/ResultGame';
import { useState } from 'react';
import { changePlayer, checkWin, checkDrow, getWinTitles } from './utils/utils';
import { fieldsDefault } from './constants/fields';

const nameGame = 'Крестики - нолики';
let winTitle = '';

const AppLayout = ({
    currentPlayer,
    fields,
    playerClick,
    resetClick,
    statusFlag,
    resultGameFlag,
    winTitle,
}) => (
    <div className={styles.container}>
        <div className={styles.appContainer}>
            <div className={styles.title}>{nameGame}</div>
            <div className={styles.board}>
                {fields.map((field) => (
                    <BoardItem
                        id={field.id}
                        value={field.value}
                        winLine={field.winLine}
                        key={field.id}
                        playerClick={playerClick}
                    />
                ))}
            </div>
            <Status currentPlayer={currentPlayer} statusFlag={statusFlag} />
            <ResultGame flag={resultGameFlag} title={winTitle} resetClick={resetClick} />
        </div>
    </div>
);

export const App = () => {
    const [currentPlayer, setCurrentPlayer] = useState('x');
    const [fields, setFields] = useState(fieldsDefault);
    const [isWin, setWin] = useState(false);
    const [isDrow, setDrow] = useState(false);
    const [statusFlag, setStatusFlag] = useState(true);
    const [resultGameFlag, setResultGameFlag] = useState(false);

    const playerClick = (id) => {
        if (isWin || isDrow) return;

        if (fields[id].value === '') {
            const newFields = fields.map((field) =>
                field.id === id ? { ...field, value: currentPlayer } : field,
            );
            if (checkDrow(newFields)) {
                setStatusFlag(false);
                winTitle = 'Ничья!';
                setResultGameFlag(true);
                setDrow(true);
            }
            if (checkWin(newFields, currentPlayer)) {
                setStatusFlag(false);
                winTitle = getWinTitles(currentPlayer);
                setResultGameFlag(true);
                setWin(true);
            }
            setFields(newFields);
            changePlayer(currentPlayer, setCurrentPlayer);
        }
    };

    const resetClick = () => {
        setFields(fieldsDefault);
        setWin(false);
        setDrow(false);
        setStatusFlag(true);
        setResultGameFlag(false);
        setCurrentPlayer('x');
    };

    return (
        <AppLayout
            currentPlayer={currentPlayer}
            fields={fields}
            playerClick={playerClick}
            resetClick={resetClick}
            statusFlag={statusFlag}
            resultGameFlag={resultGameFlag}
            winTitle={winTitle}
        />
    );
};

AppLayout.propTypes = {
    currentPlayer: PropTypes.string,
    fields: PropTypes.array,
    playerClick: PropTypes.func,
    resetClick: PropTypes.func,
    statusFlag: PropTypes.bool,
    resultGameFlag: PropTypes.bool,
    winTitle: PropTypes.string,
};
