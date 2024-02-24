import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Component } from 'react';
import {
    selectIsWin,
    selectIsDraw,
    selectFields,
    selectCurrentPlayer,
} from '../../store/selectors';
import { setDraw, setWin, setCurrentPlayer, updateFields } from '../../store/actions';
import { checkDraw, checkWin } from '../../utils/utils';
import { BoardItem } from '../boardItem/BoardItem';

class BoardContainer extends Component {
    constructor(props) {
        super(props);

        this.playerClick = this.playerClick.bind(this);
    }

    playerClick(id) {
        const { dispatch, fields, isWin, isDraw, currentPlayer } = this.props;

        if (isWin || isDraw || fields[id].value !== '') return;

        let newFields = fields.map((field) =>
            field.id === id ? { ...field, value: currentPlayer } : field,
        );

        if (checkDraw(newFields)) {
            dispatch(setDraw());
        }

        const win = checkWin(newFields, currentPlayer);

        if (win.isWin) {
            dispatch(setWin());
        } else {
            dispatch(setCurrentPlayer());
        }
        dispatch(updateFields(newFields));
    }

    render() {
        const { fields } = this.props;

        return (
            <div className="flex flex-wrap justify-center items-center w-[350px] h-[350px] bg-zinc-700 rounded-md p-[5px] mb-[2px]">
                {fields.map(({ id, value }) => (
                    <BoardItem
                        id={id}
                        key={id}
                        value={value}
                        onClick={() => this.playerClick(id)}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    fields: selectFields(state),
    isWin: selectIsWin(state),
    isDraw: selectIsDraw(state),
    currentPlayer: selectCurrentPlayer(state),
});

export const Board = connect(mapStateToProps)(BoardContainer);

BoardContainer.propTypes = {
    fields: PropTypes.array,
};
