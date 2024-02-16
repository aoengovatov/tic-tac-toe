import { ACTION_TYPE } from './action-type';

export const reset = () => ({ type: ACTION_TYPE.SET_DEFAULT });
export const setDraw = () => ({ type: ACTION_TYPE.SET_DRAW });
export const setWin = () => ({ type: ACTION_TYPE.SET_WIN });
export const setCurrentPlayer = () => ({ type: ACTION_TYPE.SET_CURRENT_PLAYER });
export const updateFields = (fields) => ({
    type: ACTION_TYPE.UPDATE_FIELDS,
    payload: fields,
});
