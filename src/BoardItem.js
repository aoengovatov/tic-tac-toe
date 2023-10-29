import styles from './boardItem.module.css';
import { Icon } from './Icon';

const BoardItemLayout = ({ icon, winLine }) => (
    <div className={`${styles.boardItem} ${winLine ? styles.winLine : ''}`}>
        <Icon icon={icon} />
    </div>
);

export const BoardItem = ({ icon, winLine }) => {
    return <BoardItemLayout icon={icon} winLine={winLine} />;
};
