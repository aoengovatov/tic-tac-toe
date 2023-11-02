import styles from './status.module.css';

const StatusLayout = ({ title }) => <div className={styles.status}>{title}</div>;

export const Status = ({ flag, title }) => {
    return flag ? <StatusLayout title={title} /> : false;
};
