import PropTypes from 'prop-types';
import { selectCurrentPlayer, selectIsDraw, selectIsWin } from '../../store/selectors';
import { store } from '../../store/store';
import styles from './status.module.css';

const StatusLayout = ({ title }) => <div className={styles.status}>{title}</div>;

export const Status = () => {
    const currentPlayer = selectCurrentPlayer(store);
    const isWin = selectIsWin(store);
    const isDraw = selectIsDraw(store);

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
};

StatusLayout.propTypes = {
    currentPlayer: PropTypes.string,
};
