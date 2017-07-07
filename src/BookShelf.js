import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import PropTypes from 'prop-types'
import './App.css'

class BookShelf extends React.Component {
    static PropTypes = {
        books: PropTypes.array.isRequired,
        shelfName: PropTypes.string.isRequired,
        bookShelf: PropTypes.string.isRequired
    }


    


    render() {
        return (

            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                <div className="bookshelf-books">
                    <Book
                        books={this.props.books.filter((book) => book.shelf === this.props.bookShelf)}
                        
                    />
                </div>
            </div>
        )
    }
}

export default BookShelf;