import React from 'react'

import BookItemStyled from './BookItem.styles'
import book from '../../images/book.jpg'

const BookItem = (props) => {
    console.log(props.book);
    const {title, authors} = props.book;
    const image = props.book.imageLinks ? props.book.imageLinks.thumbnail : book;
    // console.log(image);
    return (
        <BookItemStyled>
            <img src={image} alt="Picture by Kyle Cottrell"/>
            <div>
                <h2>{title}</h2>
                <p>Authors: {authors}</p>
                <a href="">Read more</a>
            </div>
        </BookItemStyled>
    )
}

export default BookItem
