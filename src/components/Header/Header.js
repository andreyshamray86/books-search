import React, {useContext} from 'react'

import HeaderStyled from './Header.styles'


import { BooksContext } from '../../context/BooksContext'

const Header = () => {
    const [,,bookTitle,setBookTitle, getBooks] = useContext(BooksContext);
    
    const changeTitle = (e) => {
        setBookTitle(e.target.value);
    }
    console.log(bookTitle);
    return (
        <HeaderStyled>
            <h1>Books Search</h1>
            <div>
                <input 
                    className='placeholder' 
                    type="text" 
                    placeholder='Enter a book title'
                    value={bookTitle}
                    onChange={changeTitle}
                />
            </div>
            <button type="submit" onClick={getBooks}>Search book...</button>
        </HeaderStyled>
    )
}

export default Header
