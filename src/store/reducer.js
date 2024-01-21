import { fieldsDefault } from '../constants/fields';

export const reducer = (state = { fields: fieldsDefault() }, action) => {
    switch (action.type) {
        case 'UPDATE_FIELDS':
            return { ...state, fields: action.payload };
        case 'SET_DEFAULT':
            return { ...state, fields: fieldsDefault() };
        default:
            return state;
    }
};
