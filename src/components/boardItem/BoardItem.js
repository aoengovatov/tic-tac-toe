import PropTypes from 'prop-types';
import { Component } from 'react';
import { Icon } from '../icon/Icon';
import styles from './boardItem.module.css';

class BoardItemLayout extends Component {
    render() {
        const { value, ...props } = this.props;

        return (
            <div className={styles.boardItem} {...props}>
                {value !== '' ? <Icon value={value} /> : ''}
            </div>
        );
    }
}

export class BoardItem extends Component {
    render() {
        const { id, value, ...props } = this.props;

        return <BoardItemLayout value={value} {...props} />;
    }
}

BoardItem.propTypes = {
    id: PropTypes.number,
    value: PropTypes.string,
};

BoardItemLayout.propTypes = {
    value: PropTypes.string,
};
