import 'firebase/database';

export class BookService {
  static fetchBooks(fire) {
    return new Promise((resolve, reject) => {

      const database = fire.database().ref().child('books');
      database.once('value', snapshot => {
        const books = snapshot.val();
        resolve(books);
      });
    });
  }
}
