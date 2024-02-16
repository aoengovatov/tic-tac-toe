import { useDispatch, useSelector } from 'react-redux';
import {
    selectIsWin,
    selectIsDraw,
    selectFields,
    selectCurrentPlayer,
} from '../../store/selectors';
import { checkDraw } from '../../utils/utils';
import styles from './board.module.css';

export const Board = () => {
    const fields = useSelector(selectFields);
    const isWin = useSelector(selectIsWin);
    const isDraw = useSelector(selectIsDraw);
    const currentPlayer = useSelector(selectCurrentPlayer);
    const dispatch = useDispatch();

    const playerClick = (id) => {
        if (isWin || isDraw || fields[id].value !== '') return;

        let newFields = fields.map((field) =>
            field.id === id ? { ...field, value: currentPlayer } : field,
        );

        if (checkDraw(newFields)) {
            dispatch(setDrow);
        }
        const win = checkWin(newFields, currentPlayer);
        if (win.isWin) {
            setStatusFlag(false);
            winTitle = getWinTitles(currentPlayer);
            setResultGameFlag(true);
            newFields = drowFields(newFields, win.winPattern);
            setWin(true);
        }
        dispatch({ type: 'UPDATE_FIELDS', payload: newFields });
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
