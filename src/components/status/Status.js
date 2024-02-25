import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectCurrentPlayer, selectIsDraw, selectIsWin } from '../../store/selectors';
import styles from './status.module.css';

const StatusLayout = ({ title }) => <div className={styles.status}>{title}</div>;

export const Status = () => {
    const currentPlayer = useSelector(selectCurrentPlayer);
    const isWin = useSelector(selectIsWin);
    const isDraw = useSelector(selectIsDraw);

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

Status.propTypes = {
    currentPlayer: PropTypes.string,
    statusFlag: PropTypes.bool,
};

StatusLayout.propTypes = {
    currentPlayer: PropTypes.string,
};
