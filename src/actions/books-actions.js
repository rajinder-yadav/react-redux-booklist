export const BOOK_SELECTED = 'BOOK_SELECTED';
export const BOOKS_FETCHED = 'BOOKS_FETCHED';

export function doSelectBook(book) {
  return {
    type: BOOK_SELECTED,
    payload: book
  };
}

export function doFetchBooks(books) {
  return {
    type: BOOKS_FETCHED,
    payload: books
  }
}
