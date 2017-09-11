import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  // Display Redux Store state for selected book via props.
  render() {
    if(! this.props.book.img) {
      return <p>Select a book.</p>
    }
    const imgUrl = require(`../images/${this.props.book.img}`);

    return (
      <div className="media">
        <img className="d-flex mr-3 w-25" src={imgUrl} alt="" />
          <div className="media-body">
            <h5 className="mt-0">{this.props.book.title}</h5>
            <div>{this.props.book.author}</div>
            <div>{this.props.book.date}</div>
          </div>
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
