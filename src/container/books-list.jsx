import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { BookService } from '../services/BookService';

// Action creators
// import { doSelectBook } from '../actions/books-action';
// import { doFetchBooks } from '../actions/books-action';
import * as BooksActionCreators from '../actions/books-actions';

class BooksList extends Component {

  componentWillMount() {
    // This could be moved into App component and loaded there once!
    const books = BookService.fetchBooks(this.props.fire);
    this.props.doFetchBooks(books);
  }

  // Click handler dispatches action created by calling selectBook.
  createBooksList() {
    return this.props.books.map(book => {
      let css ="list-group-item";
      if(book.id === this.props.activeBook.id) {
        css += " active";
      }
      return <li key={book.title}
        className={css}
        onClick={() => this.props.doSelectBook(book)}>{book.title}</li>;
    })
  }

  render() {
    return (
      <ul className="list-group">
        {this.createBooksList()}
      </ul>
    );
  }
}

// Ties Redux Store state to the Component props, turns component into a Container.
function mapStateToProps(store) {
  return {
    books: store.books,
    activeBook: store.activeBook
  };
}

// Ties Action to Redux dispatch and makes Action available to component via props.
// We are able to use the selectBook action to dispatch to Redux.
function mapDispatchToProps(dispatch) {
  return bindActionCreators(BooksActionCreators, dispatch);
}

// Make component a container by connecting state and action dispatch to Redux.
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
