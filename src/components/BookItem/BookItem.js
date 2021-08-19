import React from 'react'

import BookItemStyled from './BookItem.styles'
import book from '../../images/book.jpg'

const BookItem = (props) => {
    
    const {title, authors} = props.book;
    const image = props.book.imageLinks ? props.book.imageLinks.thumbnail : book;
    
    return (
        <BookItemStyled>
            <img src={image} alt={title}/>
            <div>
                <h2>{title}</h2>
                <p>Authors: {authors}</p>
                <a href="">Read more</a>
            </div>
        </BookItemStyled>
    )
}

export default BookItem
