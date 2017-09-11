import React, { Component } from 'react';
import './App.css';
import BooksList from './container/books-list';
import BookDetail from './container/book-detail';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-4">
            <h1>Book Listing</h1>
            <BooksList />
          </div>
            <div className="col ml-3">
              <h2>Book Details</h2>
              <BookDetail />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
