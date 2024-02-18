import PropTypes from 'prop-types';
import { Board } from './components/board/board';
import { Status } from './components/status/Status';
import { ResultGame } from './components/resultGame/ResultGame';
import { useDispatch } from 'react-redux';
import { reset } from './store/actions';
import styles from './app.module.css';

const AppLayout = ({ resetClick }) => (
    <div className={styles.container}>
        <div className={styles.appContainer}>
            <div className={styles.title}>Крестики - нолики</div>
            <Board />
            <Status />
            <ResultGame resetClick={resetClick} />
        </div>
    </div>
);

export const App = () => {
    const dispatch = useDispatch();

    const resetClick = () => {
        dispatch(reset());
    };

    return <AppLayout resetClick={resetClick} />;
};

AppLayout.propTypes = {
    resetClick: PropTypes.func,
};
