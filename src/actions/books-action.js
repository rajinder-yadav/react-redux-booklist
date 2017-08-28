export function doSelectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
