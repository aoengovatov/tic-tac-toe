import PropTypes from 'prop-types';
import { Icon } from '../icon/Icon';
import { useSelector } from 'react-redux';
import { selectFieldValue } from '../../store/selectors';
import styles from './boardItem.module.css';

const BoardItemLayout = ({ value, winLine, playerClick }) => {
    return (
        <div
            className={`${styles.boardItem} ${winLine ? styles.winLine : ''}`}
            playerClick={playerClick}
        >
            {value !== '' ? <Icon value={value} /> : ''}
        </div>
    );
};

export const BoardItem = ({ id, winLine, playerClick }) => {
    const value = useSelector(selectFieldValue(id));

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
    winLine: PropTypes.func,
    playerClick: PropTypes.func,
};

BoardItemLayout.propTypes = {
    value: PropTypes.string,
    winLine: PropTypes.func,
    playerClick: PropTypes.func,
};
