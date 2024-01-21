import PropTypes from 'prop-types';
import styles from './app.module.css';
import { BoardItem } from './components/boardItem/BoardItem';
import { Status } from './components/status/Status';
import { ResultGame } from './components/resultGame/ResultGame';
import { useState } from 'react';
import {
    changePlayer,
    checkWin,
    checkDrow,
    getWinTitles,
    drowFields,
} from './utils/utils';
import { store } from './store/store';

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
    const [updateFieldsStore, setUpdateFieldsStore] = useState(false);
    const [isWin, setWin] = useState(false);
    const [isDrow, setDrow] = useState(false);
    const [statusFlag, setStatusFlag] = useState(true);
    const [resultGameFlag, setResultGameFlag] = useState(false);

    const playerClick = (id) => {
        if (isWin || isDrow) return;

        if (store.getState().fields[id].value === '') {
            let newFields = store
                .getState()
                .fields.map((field) =>
                    field.id === id ? { ...field, value: currentPlayer } : field,
                );

            if (checkDrow(newFields)) {
                setStatusFlag(false);
                winTitle = 'Ничья!';
                setResultGameFlag(true);
                setDrow(true);
            }
            const win = checkWin(newFields, currentPlayer);
            if (win.isWin) {
                setStatusFlag(false);
                winTitle = getWinTitles(currentPlayer);
                setResultGameFlag(true);
                newFields = drowFields(newFields, win.winPattern);
                setWin(true);
            } else {
            }
            store.dispatch({ type: 'UPDATE_FIELDS', payload: newFields });
            setUpdateFieldsStore(!updateFieldsStore);
            changePlayer(currentPlayer, setCurrentPlayer);
        }
    };

    const resetClick = () => {
        store.dispatch({ type: 'SET_DEFAULT' });
        setUpdateFieldsStore(!updateFieldsStore);
        setWin(false);
        setDrow(false);
        setStatusFlag(true);
        setResultGameFlag(false);
        setCurrentPlayer('x');
    };

    return (
        <AppLayout
            currentPlayer={currentPlayer}
            fields={store.getState().fields}
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
