import styles from './status.module.css';

const StatusLayout = ({ title }) => <div className={styles.status}>{title}</div>;

export const Status = ({ currentPlayer, statusFlag }) => {
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

    return statusFlag ? <StatusLayout title={getStatus(currentPlayer)} /> : false;
};
