import { store } from '../../store/store';
import { useState, useEffect } from 'react';
import { BoardItem } from '../boardItem/BoardItem';
import {
    selectCurrentPlayer,
    selectFields,
    selectIsDraw,
    selectIsWin,
} from '../../store/selectors';
import { checkDrow, checkWin } from '../../utils/utils';
import { setDraw, setWin, setCurrentPlayer, setFields } from '../../store/actions';
import styles from './board.module.css';

export const Board = ({ updateApp }) => {
    const [winPattern, setWinPattern] = useState([]);
    const fields = selectFields(store);
    const isWin = selectIsWin(store);
    const isDraw = selectIsDraw(store);
    const currentPlayer = selectCurrentPlayer(store);

    useEffect(() => {
        if (!isWin && !isDraw) {
            setWinPattern([]);
        }
    }, [isWin, isDraw]);

    const playerClick = (id) => {
        if (isWin || isDraw || fields[id].value !== '') return;

        let newFields = store
            .getState()
            .fields.map((field) =>
                field.id === id ? { ...field, value: currentPlayer } : field,
            );

        if (checkDrow(newFields)) {
            store.dispatch(setDraw());
        }

        const win = checkWin(newFields, currentPlayer);

        if (win.isWin) {
            store.dispatch(setWin());
            setWinPattern(win.winPattern);
        } else {
            store.dispatch(setCurrentPlayer());
        }
        store.dispatch(setFields(newFields));
        updateApp();
    };

    return (
        <div className={styles.board}>
            {fields.map(({ id }) => (
                <BoardItem
                    id={id}
                    key={id}
                    winLine={winPattern.includes(id)}
                    onClick={() => playerClick(id)}
                />
            ))}
        </div>
    );
};
