/*export const getResultGame = (boardResult) => {
    const resultTitles = ['Победа крестика!', 'Победа нолика!', 'Ничья!'];

    if (checkWin(boardResult, 1)) {
        resulTitle = resultTitles[0];
        showResultWindow();
    } else if (checkWin(boardResult, -1)) {
        resulTitle = resultTitles[1];
        showResultWindow();
    } else if (Object.keys(boardResult).length === 9) {
        resulTitle = resultTitles[2];
        showResultWindow();
    }
};*/

export const changePlayer = (currentPlayer, setCurrentPlayer) => {
    return setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x');
};
