import React, {createContext, useState} from 'react';
import axios from 'axios';

export const BooksContext = createContext();

export const BooksContextProvider = ({children}) => {
    const [books, setBooks] = useState([]);
    const [bookTitle, setBookTitle] = useState('');

    const getBooks = () => {
        axios(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&maxResults=18&key=${process.env.REACT_APP_BOOKS_API_KEY}`)
        .then(res => {
            setBooks([...res.data.items]);
        })
        .catch(err => console.log(err))
    }

    return <BooksContext.Provider value={[books, setBooks, bookTitle, setBookTitle, getBooks]}>
        {children}
    </BooksContext.Provider>
}