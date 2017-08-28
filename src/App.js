import React, { Component } from 'react';
import './App.css';
import BooksList from './container/books-list';
import BookDetail from './container/book-detail';

class App extends Component {
  render() {
    return (
      <div>
        <BooksList />
        <div className=" mt-2">
          <BookDetail />
        </div>
      </div>
    );
  }
}

export default App;
