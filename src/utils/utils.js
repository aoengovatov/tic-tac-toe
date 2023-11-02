import { winCombinations } from '../constants/winCombinations';
import { resultGameTitles } from '../constants/resultGameTitles';

export const checkWin = (fields, currentPlayer) => {
    const fieldsArray = fields.map((field) => field.value);
    console.log(fieldsArray);
    return winCombinations.some((winPattern) =>
        winPattern.every((index) => fieldsArray[index] === currentPlayer),
    );
};

export const checkDrow = (fields) => {
    const fieldsArray = fields.map((field) => field.value);
    return fieldsArray.every((field) => field !== '');
};

export const changePlayer = (currentPlayer, setCurrentPlayer) => {
    return setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x');
};

export const getWinTitles = (currentPlayer) => {
    return currentPlayer === 'x' ? resultGameTitles[0] : resultGameTitles[1];
};
