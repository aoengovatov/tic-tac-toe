import { useDispatch, useSelector } from 'react-redux';
import {
    selectIsWin,
    selectIsDraw,
    selectFields,
    selectCurrentPlayer,
} from '../../store/selectors';
import { setDraw, setWin, setCurrentPlayer, updateFields } from '../../store/actions';
import { checkDraw, checkWin } from '../../utils/utils';
import { BoardItem } from '../boardItem/BoardItem';
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
            dispatch(setDraw);
        }

        const win = checkWin(newFields, currentPlayer);

        if (win.isWin) {
            dispatch(setWin);
        }
        dispatch(updateFields(newFields));
        dispatch(setCurrentPlayer);
    };

    return (
        <div className={styles.board}>
            {fields.map(({ id }) => (
                <BoardItem id={id} key={id} playerClick={playerClick} />
            ))}
        </div>
    );
};
