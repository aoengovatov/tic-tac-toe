import { ACTION_TYPE } from './action-type';

export const setDraw = () => ({ action: ACTION_TYPE.SET_DRAW });
export const setWin = () => ({ action: ACTION_TYPE.SET_WIN });
export const reset = () => ({ type: ACTION_TYPE.SET_DEFAULT });
