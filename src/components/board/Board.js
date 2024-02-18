import { store } from '../../store/store';
import { BoardItem } from '../boardItem/BoardItem';
import {
    selectCurrentPlayer,
    selectFields,
    selectIsDraw,
    selectIsWin,
} from '../../store/selectors';
import { checkDrow, checkWin } from '../../utils/utils';
import { setDraw } from '../../store/actions';
import styles from './board.module.css';

export const Board = () => {
    const fields = selectFields(store);
    const isWin = selectIsWin(store);
    const isDraw = selectIsDraw(store);
    const currentPlayer = selectCurrentPlayer(store);

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
        } else {
        }
        store.dispatch({ type: 'UPDATE_FIELDS', payload: newFields });
        setUpdateFieldsStore(!updateFieldsStore);
        changePlayer(currentPlayer, setCurrentPlayer);
    };

    return (
        <div className={styles.board}>
            {fields.map(({ id }) => (
                <BoardItem id={id} key={id} playerClick={playerClick} />
            ))}
        </div>
    );
};
