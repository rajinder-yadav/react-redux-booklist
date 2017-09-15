const books = [
  {
    id: 1,
    title: 'The Dark Tower III: The Waste Lands',
    author: 'Stephen King',
    date: '1 January 2016',
    img: 'dark-tower3.jpg'
  },
  {
    id: 2,
    title: 'Rich People Problems',
    author: 'Kevin Kwan',
    date: '23 May 2017',
    img: 'rpp.jpg'
  },
  {
    id: 3,
    title: 'The Whistler: A Novel',
    author: 'Stephen King',
    date: '25 October 2016',
    img: 'whistler.jpg'
  },
  {
    id: 4,
    title: 'Hunting Hour: A Timber Creek K-9 Mystery',
    author: 'Margaret Mizushima',
    date: '8 August 2017',
    img: 'hh.jpg'
  },
];

export class BookService {
  static fetchBooks() {
    return new Promise((resolve, reject) => {
      // Fake a slow connection
      setTimeout(() => {
        resolve(books);
      }, 1000);
    })
  }
}
