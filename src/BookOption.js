import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BookOption extends React.Component {
    // static PropTypes = {
    //     books: PropTypes.array.isRequired,
    //     onMoveBook: PropTypes.func.isRequired
    // }

    /**
     * move the book to the specified bookShelf by using drop-down box
     */
    moveBook = (bookObj, shelf) => {
        // var index = this.state.books.indexOf(bookObj)
        // var books = this.state.books
        // books[index].shelf = shelf
        let updated = BooksAPI.update(bookObj, shelf)
        this.forceUpdate()
    }

    render() {
        return (
            <select defaultValue='0'
                onChange={(event) => this.moveBook(this.props.book, event.target.value)}>
                <option value="0" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        )
    }
}

export default BookOption;