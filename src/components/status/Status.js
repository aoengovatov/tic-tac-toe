import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Component } from 'react';
import { selectCurrentPlayer, selectIsDraw, selectIsWin } from '../../store/selectors';
import styles from './status.module.css';

class StatusLayout extends Component {
    render() {
        const { title } = this.props;

        return <div className={styles.status}>{title}</div>;
    }
}

class StatusContainer extends Component {
    render() {
        const { currentPlayer, isWin, isDraw } = this.props;

        const getStatus = (currentPlayer) => {
            switch (currentPlayer) {
                case 'x':
                    return 'ходит крестик';
                case 'o':
                    return 'ходит нолик';
                default:
                    return '';
            }
        };

        return !(isWin || isDraw) && <StatusLayout title={getStatus(currentPlayer)} />;
    }
}

const mapSelectroToProps = (state) => ({
    currentPlayer: selectCurrentPlayer(state),
    isWin: selectIsWin(state),
    isWraw: selectIsDraw(state),
});

export const Status = connect(mapSelectroToProps)(StatusContainer);

StatusContainer.propTypes = {
    currentPlayer: PropTypes.string,
    isWin: PropTypes.bool,
    isDraw: PropTypes.bool,
};

StatusLayout.propTypes = {
    title: PropTypes.string,
};
