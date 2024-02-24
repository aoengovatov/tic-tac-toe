import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import { selectIsWin, selectIsDraw, selectCurrentPlayer } from '../../store/selectors';
import { getWinTitles } from '../../utils/utils';

class ResultGameLayout extends Component {
    render() {
        const { title, resetClick } = this.props;

        return (
            <div className="flex flex-col items-center bg-blue-950 rounded-lg py-[15px] px-[25px] m-[20px]">
                <div className="text-[25px] mb-[10px]">{title}</div>
                <button
                    className="border-none bg-blue-800 text-[16px] py-[8px] px-[20px] rounded-md cursor-pointer hover:opacity-80 transition-all duration-200"
                    onClick={resetClick}
                >
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
