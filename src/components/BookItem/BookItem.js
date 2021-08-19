import React from 'react'
import { withRouter, Link } from 'react-router-dom'

import BookItemStyled from './BookItem.styles'
import book from '../../images/book.jpg'

const BookItem = (props) => {
    const id = props.id;
    const {title, authors} = props.book;
    const image = props.book.imageLinks ? props.book.imageLinks.thumbnail : book;
    
    return (
        <BookItemStyled>
            <img src={image} alt={title}/>
            <div>
                <h2>{title}</h2>
                <p>Authors: {authors}</p>
                <Link to={`/books/${id}`}>Read more</Link>
            </div>
        </BookItemStyled>
    )
}

export default withRouter(BookItem);
