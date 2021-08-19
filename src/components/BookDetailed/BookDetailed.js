import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

import BookDetailedStyled from './BookDetailed.styles';
import bookImage from '../../images/book.jpg'

const BookDetailed = (props) => {

    const bookId = props.match.params.id;
    const [book, setBook] = useState(null);

    axios.get(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=${process.env.REACT_APP_BOOKS_API_KEY}`)
    .then(res => {
        if(!book) {
            setBook({...res.data.volumeInfo});
        } 
    })
    .catch(err => console.log(err))

    let image;
    if(book) {
        image = book.imageLinks ? book.imageLinks.medium : bookImage;
    }

    
    return (
        <BookDetailedStyled>
            {
                book ? 
                <>
                    <div className='book__image'>
                        <img src={image} alt="" />
                    </div>
                    <div className='book__info'>
                        <h3 className='book__info-title'>{book.title}</h3>
                        <h4 className='book__info-authors'>{book.authors}</h4>
                        <span className='book__info-category'>Categories: {book.categories}</span>
                        <span className='book__info-pages'>Pages: {book.printedPageCount}</span>
                        <p className='book__info-desc'>{book.description}</p>
                        <span className='book__info-published'>Published: {book.publishedDate}</span>
                        <hr />
                        <Link to='/'>To seacrh page...</Link>
                    </div>  
                </>
                    
                 : <p>Loading...</p>
            }
            
        </BookDetailedStyled>
    )
}

export default BookDetailed;