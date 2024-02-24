import PropTypes from 'prop-types';
import { Component } from 'react';
import { Board } from './components/board/board';
import { Status } from './components/status/Status';
import { ResultGame } from './components/resultGame/ResultGame';
import { connect } from 'react-redux';
import { reset } from './store/actions';

class AppLayout extends Component {
    render() {
        const { resetClick } = this.props;

        return (
            <div className="flex flex-col items-center justify-center min-h-[100vh] bg-neutral-900">
                <div className="flex flex-col items-center">
                    <div className="text-[30px] mb-[12px]">Крестики - нолики</div>
                    <Board />
                    <Status />
                    <ResultGame resetClick={resetClick} />
                </div>
            </div>
        );
    }
}

export class AppContainer extends Component {
    render() {
        return <AppLayout resetClick={this.props.resetClick} />;
    }
}

const mapDispatchToProps = (dispatch) => ({
    resetClick: () => dispatch(reset()),
});

export const App = connect(null, mapDispatchToProps)(AppContainer);

AppLayout.propTypes = {
    resetClick: PropTypes.func,
};

AppContainer.propTypes = {
    resetClick: PropTypes.func,
};
