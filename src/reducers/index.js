import {combineReducers} from 'redux';
import BooksReducer from './books-reducer';
import ActiveBookReducer from './active-book-reducer';

// Combine application reducers to be registered with Redux.
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
