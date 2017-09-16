import { BookService } from '../services/BookService';

export const BOOK_SELECTED = 'BOOK_SELECTED';
export const BOOKS_FETCHED = 'BOOKS_FETCHED';

export function doSelectBook(book) {
  return {
    type: BOOK_SELECTED,
    payload: book
  };
}

export function doFetchBooks(firebase) {
  const books = BookService.fetchBooks(firebase);
  return {
    type: BOOKS_FETCHED,
    payload: books
  }
}
