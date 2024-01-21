import { createStore } from 'redux';
import { reducer } from './reducer';
//import { fieldsDefault } from '../constants/fields';

export const store = createStore(reducer);
