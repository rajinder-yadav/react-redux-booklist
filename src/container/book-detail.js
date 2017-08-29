import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  // Display Redux Store state for selected book via props.
  render() {
    return (
      <div>
        <h3>Book Detail</h3>
        <div>{this.props.book.title}</div>
      </div>
    );
  }
}

// Ties Redux Store state to the Component props, turns component into a Container.
function mapStateToProps(store) {
  return {
    book: store.activeBook
  };
}

// Make component a container by connecting state to Redux.
export default connect(mapStateToProps)(BookDetail);
