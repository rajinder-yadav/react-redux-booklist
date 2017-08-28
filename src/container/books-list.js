import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/books-action';
import {bindActionCreators} from 'redux';

class BooksList extends Component {
  // Click handler dispatches action created by calling selectBook.
  createBooksList() {
    return this.props.books.map(book => {
      return <li key={book.title}
        className="list-group-item col-sm-4"
        onClick={() => this.props.selectBook(book)}>{book.title}</li>;
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
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// Ties Action to Redux dispatch and makes Action available to component via props.
// We are able to use the selectBook action to dispatch to Redux.
function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook}, dispatch);
}

// Make component a container by connecting state and action dispatch to Redux.
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
