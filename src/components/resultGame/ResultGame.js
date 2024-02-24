import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import { selectIsWin, selectIsDraw, selectCurrentPlayer } from '../../store/selectors';
import { getWinTitles } from '../../utils/utils';
import styles from './resultGame.module.css';

class ResultGameLayout extends Component {
    render() {
        const { title, resetClick } = this.props;

        return (
            <div className={styles.endContainer}>
                <div className={styles.endTitle}>{title}</div>
                <button className={styles.button} onClick={resetClick}>
                    новая игра
                </button>
            </div>
        );
    }
}

class ResultGameContainer extends Component {
    render() {
        const { isWin, isDraw, currentPlayer, resetClick } = this.props;

        const title = isDraw ? 'Ничья!' : getWinTitles(currentPlayer);

        return (
            (isWin || isDraw) && (
                <ResultGameLayout title={title} resetClick={resetClick} />
            )
        );
    }
}

const mapStateToProps = (state) => ({
    isWin: selectIsWin(state),
    isDraw: selectIsDraw(state),
    currentPlayer: selectCurrentPlayer(state),
});

export const ResultGame = connect(mapStateToProps)(ResultGameContainer);

ResultGame.propTypes = {
    isWin: PropTypes.bool,
    isDraw: PropTypes.bool,
    currentPlayer: PropTypes.string,
    resetClick: PropTypes.func,
};

ResultGameLayout.propTypes = {
    title: PropTypes.string,
    resetClick: PropTypes.func,
};
