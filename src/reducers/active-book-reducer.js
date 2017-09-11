const InitalState = {title: 'Pick a book.', author: null, img: null};

export default function ActiveBookReducer(state = InitalState, {type, payload}) {
  switch(type) {
    case 'BOOK_SELECTED':
      return payload;
    default:
    // Fall through, silence linter error.
  }
  return state;
}
