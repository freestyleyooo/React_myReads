import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BookShelf extends React.Component {
    // static PropTypes = {
    //     books: PropTypes.array.isRequired,
    //     onMoveBook: PropTypes.func.isRequired
    // }

    state = {
        books: []
    }

    getAllBook = function () {
        BooksAPI.getAll().then((books) => {
            this.setState({
                books: books.filter((book) => book.shelf === this.props.bookShelf)
            })
        })
    }

    componentDidMount() {
        this.getAllBook()
    }

    componentDidUpdate() {
        this.getAllBook()
    }


    render() {
        return (

            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfName}</h2>
                <div className="bookshelf-books">
                    <Book
                        books={this.state.books}
                        
                    />
                </div>
            </div>
        )
    }
}

export default BookShelf;