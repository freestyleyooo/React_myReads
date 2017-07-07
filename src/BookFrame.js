import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'
import './App.css'

const shelfName = {
    currentlyReading: {
        bookShelf: 'currentlyReading',
        shelfName: 'Currently Reading'
    },
    wantToRead: {
        bookShelf: 'wantToRead',
        shelfName: 'Want to Read'
    },
    read: {
        bookShelf: 'read',
        shelfName: 'Read'
    }
}

class BookFrame extends React.Component {

    static PropTypes = {
        books: PropTypes.array.isRequired,
    }

    render() {

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf
                            books={this.props.books}
                            shelfName={shelfName.currentlyReading.shelfName}
                            bookShelf={shelfName.currentlyReading.bookShelf}
                        />

                        <BookShelf
                            books={this.props.books}
                            shelfName={shelfName.wantToRead.shelfName}
                            bookShelf={shelfName.wantToRead.bookShelf}
                        />

                        <BookShelf
                            books={this.props.books}
                            shelfName={shelfName.read.shelfName}
                            bookShelf={shelfName.read.bookShelf}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BookFrame;