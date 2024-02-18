export const selectField = (state, id) => state.getState().fields[id];
export const selectFields = (state, id) => state.getState().fields;
export const selectIsWin = (state) => state.getState().isWin;
export const selectIsDraw = (state) => state.getState().isDraw;
export const selectCurrentPlayer = (state) => state.getState().currentPlayer;
