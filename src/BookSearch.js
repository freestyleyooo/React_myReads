import React from 'react'
import { Link } from 'react-router-dom'
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
        this.setState({
            query : event.target.value.trim(),
        })
        BooksAPI.search(this.state.query,10).then((books) => {
            this.setState({
                booksList : books
                })
            })
    }

    getBook = (book, shelf) => {
        book.shelf = shelf
        this.props.onAddBook(book)
    }

    render() {

        const { query, booksList } = this.state

        let showingBooks = []
        if (booksList.length>0) {
            showingBooks = booksList
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
                    <ol className="books-grid">
                        {showingBooks[0] && showingBooks.map((book, index) => (
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                            <select defaultValue="none" onChange={(event) => this.getBook(book, event.target.value)}>
                                                <option value="none" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead" >Want to Read</option>
                                                <option value="read">Read</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors[0]}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookSearch;