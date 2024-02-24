import PropTypes from 'prop-types';
import { Component } from 'react';
import { Icon } from '../icon/Icon';
import styles from './boardItem.module.css';
import { useSelector } from 'react-redux';
import { selectFieldValue } from '../../store/selectors';

class BoardItemLayout extends Component {
    render() {
        const { value, winLine, ...props } = this.props;

        return (
            <div
                className={`${styles.boardItem} ${winLine ? styles.winLine : ''}`}
                {...props}
            >
                {value !== '' ? <Icon value={value} /> : ''}
            </div>
        );
    }
}

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
