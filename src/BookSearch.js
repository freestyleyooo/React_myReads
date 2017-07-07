import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BookSearch extends React.Component {

    static PropTypes = {
        onAddBook: PropTypes.func.isRequired
    }

    state = {
        query: '',
        booksList: []
    }

    updateQuery = (event) => {
        let query = event.target.value
        this.setState({
            query
        })

        query = query.trim()
        if (query) {
            BooksAPI.search(query, 10).then((books) => {
                this.setState({
                    booksList: books
                })
            })
        }

    }

    getBook = (book, shelf) => {
        book.shelf = shelf
        this.props.onAddBook(book)
    }

    render() {

        const { query, booksList } = this.state
        const { books } = this.props
        let showingBooks = []
        if (booksList && booksList.length > 0) {
            showingBooks = booksList.map((book, index) => {
                let trueBook = book
                for (let b of books) {
                    if (book.id === b.id) {
                        trueBook = b
                        break
                    }
                }
                return trueBook
            })
        }



        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <Book
                        books={showingBooks}
                    />
                </div>
            </div>
        )
    }
}

export default BookSearch;