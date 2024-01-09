import { createStore } from 'redux';
import { reducerFields } from './reducerFields';
import { fieldsDefault } from '../constants/fields';

export const fieldsStore = createStore(reducerFields, fieldsDefault());
