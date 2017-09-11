import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {doSelectBook} from '../actions/books-action';

class BooksList extends Component {
  // Click handler dispatches action created by calling selectBook.
  createBooksList() {
    return this.props.books.map(book => {
      return <li key={book.title}
        className="list-group-item col-sm-4"
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
    books: store.books
  };
}

// Ties Action to Redux dispatch and makes Action available to component via props.
// We are able to use the selectBook action to dispatch to Redux.
function mapDispatchToProps(dispatch) {
  return bindActionCreators({doSelectBook}, dispatch);
}

// Make component a container by connecting state and action dispatch to Redux.
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
