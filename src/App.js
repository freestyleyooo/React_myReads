import React from 'react';
import { Route } from 'react-router-dom'
import BookFrame from './BookFrame'
import BookSearch from './BookSearch'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  state = {
    books: [],
  }

  componentDidMount() {
    this.getAllBook()
  }

  componentDidUpdate() {
    this.getAllBook()
  }

  getAllBook = function () {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books
      })
    })
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
            books={this.state.books} />
        )} />

        <Route path='/search' render={() => (
          <BookSearch
            books={this.state.books} />
        )} />
        />
      </div>
    )
  }
}

export default BooksApp;
