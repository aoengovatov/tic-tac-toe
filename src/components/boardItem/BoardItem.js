import PropTypes from 'prop-types';
import { Icon } from '../icon/Icon';
import styles from './boardItem.module.css';

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

export const BoardItem = (props) => {
    return <BoardItemLayout {...props} />;
};

BoardItem.propTypes = {
    props: PropTypes.objectOf({
        id: PropTypes.number,
        value: PropTypes.string,
        winLine: PropTypes.bool,
    }),
};

BoardItemLayout.propTypes = {
    value: PropTypes.string,
    winLine: PropTypes.bool,
};
