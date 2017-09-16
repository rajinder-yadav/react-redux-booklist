import 'firebase/database';

export class BookService {
  static fetchBooks(firebase) {
    return new Promise((resolve, reject) => {

      // const database = fire.database().ref().child('books');
      const database = firebase.database().ref('books/');
      database.once("value", snapshot => {
        const books = snapshot.val();
        resolve(books);
      });
    });
  }
}
