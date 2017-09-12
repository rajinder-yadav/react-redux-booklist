import { BOOK_SELECTED } from '../actions/books-actions';

const InitalState = { title: 'Pick a book.', author: null, img: null };

export default function ActiveBookReducer(state = InitalState, { type, payload }) {
  switch (type) {
    case BOOK_SELECTED:
      console.log(payload);
      return payload;

    default:
    // Fall through, silence linter error.
  }
  return state;
}
