import PropTypes from 'prop-types';
import styles from './boardItem.module.css';
import { Icon } from '../icon/Icon';

const BoardItemLayout = ({ id, value, winLine, playerClick }) => (
    <div
        className={`${styles.boardItem} ${winLine ? styles.winLine : ''}`}
        id={id}
        value={value}
        onClick={() => playerClick(id)}
    >
        {value !== '' ? <Icon value={value} /> : ''}
    </div>
);

export const BoardItem = ({ id, value, winLine, playerClick }) => {
    return (
        <BoardItemLayout
            id={id}
            value={value}
            winLine={winLine}
            playerClick={playerClick}
        />
    );
};

BoardItem.propTypes = {
    id: PropTypes.number,
    value: PropTypes.string,
    winLine: PropTypes.bool,
    playerClick: PropTypes.func,
};

BoardItemLayout.propTypes = {
    id: PropTypes.number,
    value: PropTypes.string,
    winLine: PropTypes.bool,
    playerClick: PropTypes.func,
};
