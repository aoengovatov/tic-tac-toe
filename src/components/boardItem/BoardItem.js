import PropTypes from 'prop-types';
import styles from './boardItem.module.css';
import { Icon } from '../icon/Icon';
import { selectField } from '../../store/selectors';
import { store } from '../../store/store';

const BoardItemLayout = ({ value, winLine, ...props }) => (
    <div className={`${styles.boardItem} ${winLine ? styles.winLine : ''}`} {...props}>
        {value !== '' ? <Icon value={value} /> : ''}
    </div>
);

export const BoardItem = ({ id, winLine, ...props }) => {
    const { value } = selectField(store, id);

    return <BoardItemLayout value={value} winLine={winLine} {...props} />;
};

BoardItem.propTypes = {
    id: PropTypes.number,
    value: PropTypes.string,
    winLine: PropTypes.bool,
    onClick: PropTypes.func,
};

BoardItemLayout.propTypes = {
    value: PropTypes.string,
    winLine: PropTypes.bool,
    onClick: PropTypes.func,
};
