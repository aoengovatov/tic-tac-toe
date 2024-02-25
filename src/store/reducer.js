import { fieldsDefault } from '../constants/fields';
import { ACTION_TYPE } from './action-type';

const STATE_DEFAULT = {
    fields: fieldsDefault,
    isWin: false,
    isDraw: false,
    currentPlayer: 'x',
};

export const reducer = (state = STATE_DEFAULT, action) => {
    switch (action.type) {
        case ACTION_TYPE.UPDATE_FIELDS:
            return { ...state, fields: action.payload };
        case ACTION_TYPE.SET_DEFAULT:
            return STATE_DEFAULT;
        case ACTION_TYPE.SET_DRAW:
            return { ...state, isDraw: true };
        case ACTION_TYPE.SET_WIN:
            return { ...state, isWin: true };
        case ACTION_TYPE.SET_CURRENT_PLAYER:
            return { ...state, currentPlayer: state.currentPlayer === 'x' ? 'o' : 'x' };
        default:
            return state;
    }
};
