import PropTypes from 'prop-types';
import { Board } from './components/board/Board';
import { Status } from './components/status/Status';
import { ResultGame } from './components/resultGame/ResultGame';
import { useState } from 'react';
import { store } from './store/store';
import { reset } from './store/actions';
import styles from './app.module.css';

const AppLayout = ({ resetClick, updateApp }) => (
    <div className={styles.container}>
        <div className={styles.appContainer}>
            <div className={styles.title}>Крестики - нолики</div>
            <Board updateApp={updateApp} />
            <Status />
            <ResultGame resetClick={resetClick} />
        </div>
    </div>
);

export const App = () => {
    const [update, setUpdate] = useState(false);

    const updateApp = () => {
        setUpdate(!update);
    };

    const resetClick = () => {
        store.dispatch(reset());
        updateApp();
    };

    return <AppLayout recetClick={resetClick} updateApp={updateApp} />;
};

AppLayout.propTypes = {
    resetClick: PropTypes.func,
    updateApp: PropTypes.func,
};
