import { createStore } from 'redux';
import { reducer } from './reducer';

export const fieldsStore = createStore(reducer);
