import styles from './app.module.css';

const AppLayout = ({ name }) => (
	<div className={styles.container}>
		<div className={styles.appContainer}>
			<div className={styles.title}>{name}</div>
			<div className={styles.board}>
				<div className={styles.boardItem}>1</div>
				<div className={styles.boardItem}>2</div>
				<div className={styles.boardItem}>3</div>
				<div className={styles.boardItem}>4</div>
				<div className={styles.boardItem}>5</div>
				<div className={styles.boardItem}>6</div>
				<div className={styles.boardItem}>7</div>
				<div className={styles.boardItem}>8</div>
				<div className={styles.boardItem}>9</div>
			</div>
			<div className={styles.status}>строка состояния</div>
			<button className={styles.button}>новая игра</button>
		</div>
	</div>
);

export const App = () => {
	const name = 'Крестики - нолики';
	return <AppLayout name={name} />;
};
