import React from 'react'
import { Link } from 'react-router-dom'
import BookOption from './BookOption'
import PropTypes from 'prop-types'
import './App.css'

class Book extends React.Component {
    static PropTypes = {
        books: PropTypes.array.isRequired,
        onMoveBook: PropTypes.func.isRequired
    }

    

    render() {
        return (

            <ol className="books-grid">
                {this.props.books.map((book, index) => (
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                    <BookOption
                                        book={book}
                                         />
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