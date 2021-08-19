import React from 'react'

import BookItemStyled from './BookItem.styles'

const BookItem = () => {
    return (
        <BookItemStyled>
            <img src="https://source.unsplash.com/75S9fpDJVdo/300x510" alt="Picture by Kyle Cottrell"/>
            <div>
                <h2>NASA Has Found Hundreds Of Potential New Planets</h2>
                <p>Author: Steve</p>
                <a href="">Read more</a>
            </div>
        </BookItemStyled>
    )
}

export default BookItem
