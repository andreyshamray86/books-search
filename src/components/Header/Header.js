import React from 'react'

import HeaderStyled from './Header.styles'

const Header = () => {
    return (
        <HeaderStyled>
            <h1>Books Search</h1>
            <div>
                <input type="text" placeholder='Enter a book title' className='placeholder'/>
            </div>
            <button type="submit">Search book...</button>
        </HeaderStyled>
    )
}

export default Header
