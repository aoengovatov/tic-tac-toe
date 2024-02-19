import PropTypes from 'prop-types';
import { selectCurrentPlayer, selectIsDraw, selectIsWin } from '../../store/selectors';
import { store } from '../../store/store';
import { getWinTitles } from '../../utils/utils';
import styles from './resultGame.module.css';

const ResultGameLayout = ({ title, resetClick }) => (
    <div className={styles.endContainer}>
        <div className={styles.endTitle}>{title}</div>
        <button className={styles.button} onClick={resetClick}>
            новая игра
        </button>
    </div>
);

export const ResultGame = ({ resetClick }) => {
    const isWin = selectIsWin(store);
    const isDraw = selectIsDraw(store);
    const currentPlayer = selectCurrentPlayer(store);
    const title = isDraw ? 'Ничья' : getWinTitles(currentPlayer);

    return (
        (isWin || isDraw) && <ResultGameLayout title={title} resetClick={resetClick} />
    );
};

ResultGame.propTypes = {
    resetClick: PropTypes.func,
};

ResultGameLayout.propTypes = {
    title: PropTypes.string,
    resetClick: PropTypes.func,
};
