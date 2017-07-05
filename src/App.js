import React from 'react';
import { Route } from 'react-router-dom'
import BookList from './BookList'
import BookSearch from './BookSearch'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books : []
  } 

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books
      })
    })
  }


  moveBook = (bookObj, shelf) => {
    var index = this.state.books.indexOf(bookObj)
    var books = this.state.books
    books[index].shelf = shelf
    this.setState({
      books: books
    })
    BooksAPI.update(bookObj, shelf)
  }

  addBook = (book) => {
    this.setState((state) => ({
      books : this.state.books.concat([book])
    }))
  }

  render() {
    return (
      <div className="app">
          <Route exact path='/' render={() => (
            <BookList 
              books={this.state.books}
              onMoveBook={this.moveBook}/>
            )}/>

          <Route path='/search' render={({history}) => (
            <BookSearch
              onAddBook={(book) => {
                this.addBook(book)
                history.push('/')
              }}/>
            )}/>
            />
      </div>
    )
  }
}

export default BooksApp;
