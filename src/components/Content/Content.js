import React, {useContext} from 'react'
import { BooksContext } from '../../context/BooksContext'

import BookItem from '../BookItem/BookItem'
// import BooksList from '../BooksList/BooksList'

import ContentStyled from './Content.styles'

const Content = () => {
    const [books] = useContext(BooksContext);
    return (
        <ContentStyled>
            {
                books.map(book => {
                   return <BookItem book={book.volumeInfo} key={book.id}/>
                })
            }
        </ContentStyled>
    )
}

export default Content
