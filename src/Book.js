import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import './App.css'

class Book extends React.Component {
    static PropTypes = {
        books: PropTypes.array.isRequired
    }

    /**
     * move the book to the specified bookShelf by using drop-down box
     */
    moveBook = (bookObj, shelf) => {
        let updated = BooksAPI.update(bookObj, shelf)
        this.forceUpdate()
    }

    render() {
        let defaultCover = './images/404cover.jpeg'
        return (

            <ol className="books-grid">
                {this.props.books.map((book, index) => (
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{
                                    width: 128, height: 193,
                                    backgroundImage: `url(${book.imageLinks.thumbnail || defaultCover})`
                                }}></div>
                                <div className="book-shelf-changer">
                                    <select defaultValue={book.shelf}
                                        onChange={(event) => this.moveBook(book, event.target.value)}>
                                        <option value="none" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                        </div>
                    </li>
                ))}
            </ol>
        )
    }
}

export default Book;