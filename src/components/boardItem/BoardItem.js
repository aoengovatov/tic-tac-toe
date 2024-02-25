import PropTypes from 'prop-types';
import { Icon } from '../icon/Icon';
import styles from './boardItem.module.css';
import { useSelector } from 'react-redux';
import { selectFieldValue } from '../../store/selectors';

const BoardItemLayout = ({ value, winLine, ...props }) => {
    return (
        <div
            className={`${styles.boardItem} ${winLine ? styles.winLine : ''}`}
            {...props}
        >
            {value !== '' ? <Icon value={value} /> : ''}
        </div>
    );
};

export const BoardItem = ({ id, ...props }) => {
    const field = useSelector(selectFieldValue(id));

    return <BoardItemLayout value={field.value} winLine={field.winLine} {...props} />;
};

BoardItem.propTypes = {
    id: PropTypes.number,
};

BoardItemLayout.propTypes = {
    value: PropTypes.string,
    winLine: PropTypes.bool,
};
