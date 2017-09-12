import { BOOKS_FETCHED } from '../actions/books-actions';

// Empty array of books
const InitialState = [];

export default function BooksReducer(state = InitialState, { type, payload }) {
  switch (type) {
    case BOOKS_FETCHED:
      return payload;

    default:
    // Fall through, silence linter error.
  }
  return state;
};
