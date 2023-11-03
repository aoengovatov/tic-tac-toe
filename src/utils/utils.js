import { winCombinations } from '../constants/winCombinations';
import { resultGameTitles } from '../constants/resultGameTitles';

export const checkWin = (fields, currentPlayer) => {
    const fieldsArray = fields.map((field) => field.value);
    let winPatternResult = [];
    const isWin = winCombinations.some((winPattern, indexPattern) =>
        winPattern.every(
            (index) => fieldsArray[index] === currentPlayer,
            (winPatternResult = winCombinations[indexPattern]),
        ),
    );

    return isWin ? { isWin: true, winPattern: [...winPatternResult] } : { isWin: false };
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

export const drowFields = (fields, winPattern) => {
    winPattern.forEach((el) =>
        fields.map((field) => (field.id === el ? (field.winLine = true) : field)),
    );
    return fields;
};
