import styles from './app.module.css';
import { BoardItem } from './components/boardItem/BoardItem';
import { ResultGame } from './components/resultGame/ResultGame';
import { Status } from './components/status/Status';
import { useState } from 'react';
import { changePlayer } from './utils/utils';
import { fieldsDefault } from './constants/fields';

const nameGame = 'Крестики - нолики';

const AppLayout = ({ currentPlayer, fields, playerClick }) => (
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
        </div>
    </div>
);

export const App = () => {
    const [currentPlayer, setCurrentPlayer] = useState('x');
    const [fields, setFields] = useState(fieldsDefault);
    const [isWin, setIsWin] = useState(false);
    const [isDrow, setIsDrow] = useState(false);

    const playerClick = (id) => {
        // взять текущий ашудвы
        setFields(
            fields.map((field) =>
                field.id === id ? { ...field, value: currentPlayer } : field,
            ),
        );
        changePlayer(currentPlayer, setCurrentPlayer);
        console.log(fields);
    };

    return (
        <AppLayout
            currentPlayer={currentPlayer}
            fields={fields}
            playerClick={playerClick}
        />
    );
};
