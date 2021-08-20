import React, {useContext} from 'react'
import { BooksContext } from '../../context/BooksContext'

import BookItem from '../BookItem/BookItem'

import ContentStyled from './Content.styles'
import content from '../../images/content.jpg'

const Content = () => {
    const [books,,bookTitle] = useContext(BooksContext);
    return (
        <ContentStyled>
            <img className="content__image" src={content} alt="" />
            { 
            bookTitle && books.length > 0 ? 
                books.map(book => {
                   return <BookItem book={book.volumeInfo} id={book.id} key={book.id}/>
                })
                : <p className='content__title'>Enter a book title above</p>
            }
        </ContentStyled>
    )
}

export default Content
