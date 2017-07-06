import React from 'react';
import { Route } from 'react-router-dom'
import BookFrame from './BookFrame'
import BookSearch from './BookSearch'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],

  }

  /**
     * add the book which user search from search page to the book array
     */
  addBook = (book) => {
    let books = this.state.books
    let existBook = this.state.books.filter((b) => b.id === book.id)

    if (existBook && existBook.length > 0) {//update operation
      books = books.map((b) => {
        if (b.id === existBook.id) {
          return existBook
        } else {
          return b
        }
      })
    } else {
      books = books.concat([book])
    }
    this.setState((state) => ({
      books
    }))
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookFrame
            shelfCount={this.state.shelfCount} />
        )} />

        <Route path='/search' render={() => (
          <BookSearch/>
        )} />
        />
      </div>
    )
  }
}

export default BooksApp;
