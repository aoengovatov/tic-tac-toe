import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectIsWin, selectIsDraw, selectCurrentPlayer } from '../../store/selectors';
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
    const isWin = useSelector(selectIsWin);
    const isDraw = useSelector(selectIsDraw);
    const currentPlayer = useSelector(selectCurrentPlayer);

    return (
        (isWin || isDraw) && (
            <ResultGameLayout
                title={getWinTitles(currentPlayer)}
                resetClick={resetClick}
            />
        )
    );
};

ResultGame.propTypes = {
    resetClick: PropTypes.func,
};

ResultGameLayout.propTypes = {
    title: PropTypes.string,
    resetClick: PropTypes.func,
};
