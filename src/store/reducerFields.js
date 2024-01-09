import { fieldsDefault } from '../constants/fields';

export const reducerFields = (state, action) => {
    switch (action.type) {
        case 'UPDATE_FIELDS':
            return [...action.payload];
        case 'SET_DEFAULT':
            return fieldsDefault();
        default:
            return state;
    }
};
