import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'
import './App.css'

class BookFrame extends React.Component {

    static PropTypes = {
        books: PropTypes.array.isRequired,
        onMoveBook: PropTypes.func.isRequired
    }

    state = {
        shelfName: {
            currentlyReading: {
                bookShelf : 'currentlyReading',
                shelfName : 'Currently Reading'
            },
            wantToRead: {
                bookShelf : 'wantToRead',
                shelfName : 'Want to Read'
            },
            read: {
                bookShelf : 'read',
                shelfName : 'Read'
            }
        }
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
                            shelfName={this.state.shelfName.currentlyReading.shelfName}
                            bookShelf={this.state.shelfName.currentlyReading.bookShelf}
                        />

                        <BookShelf
                            shelfName={this.state.shelfName.wantToRead.shelfName}
                            bookShelf={this.state.shelfName.wantToRead.bookShelf}
                        />

                        <BookShelf
                            shelfName={this.state.shelfName.read.shelfName}
                            bookShelf={this.state.shelfName.read.bookShelf}
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