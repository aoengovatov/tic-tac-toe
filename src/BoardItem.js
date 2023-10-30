import styles from './boardItem.module.css';
import { Icon } from './Icon';
import { useState } from 'react';

const BoardItemLayout = ({ winLine, id, value, setValueOnBoard }) => (
    <div
        className={`${styles.boardItem} ${winLine ? styles.winLine : ''}`}
        onClick={() => setValueOnBoard()}
        data-id={id}
        data-value={value}
        key={id}
    >
        <Icon iconValue={value} />
    </div>
);

export const BoardItem = ({ winLine, id, step, setStep }) => {
    const [value, setValue] = useState(0);

    const setValueOnBoard = () => {
        if (value === 0) {
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
