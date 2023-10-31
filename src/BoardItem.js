import styles from './boardItem.module.css';
import { Icon } from './Icon';
import { useState } from 'react';

const BoardItemLayout = ({ winLine, id, value, setValueOnBoard }) => (
    <>
        <div
            className={`${styles.boardItem} ${winLine ? styles.winLine : ''}`}
            id="boarditem"
            onClick={() => setValueOnBoard()}
            data-id={id}
            key={id}
        >
            <Icon iconValue={value} />
        </div>
    </>
);

export const BoardItem = ({
    boardItems,
    winLine,
    id,
    step,
    setStep,
    endGameFlag,
    newGame,
}) => {
    const [value, setValue] = useState(0);

    const setValueOnBoard = () => {
        if (value === 0 && !endGameFlag) {
            setValue(step ? 1 : -1);
            setStep(!step);
        }
    };

    return (
        <BoardItemLayout
            winLine={winLine}
            id={id}
            value={value}
            setValueOnBoard={setValueOnBoard}
        />
    );
};
