import styled from "styled-components";

const BookDetailedStyled = styled.div`
    position: relative;
    padding: 50px 100px;
    display: flex;
    justify-content: space-around;
    
    .detailed__image {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        height: 100%;
        width: 100%;
    }
    
    .book__image {
        z-index: 5;
        width: 30%;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .book__info {
        width: 50%;
        z-index: 5;
        &-title {
            margin: 0;
        }
        &-category {
            display: block;
            margin-bottom: 15px;
        }
        &-pages {
            display: block;
        }
        &-published {
            display: block;
            margin-bottom: 55px;
        }
        a {
            text-decoration: none;
            font-size: 20px;
        }
    }

    @media (max-width: 1600px) {
        justify-content: flex-start;
        .book__image {
            width: 50%;
            img {
                width: 80%;
                height: 100%;
            }
        }
        .book__info {
            width: 40%;
        }
    } 
    @media (max-width: 1100px) {
        padding: 50px 50px;
        .book__image {
            width: 40%;
            img {
                width: 90%;
                height: 100%;
            }
        }
        .book__info {
            width: 60%;
        }
    }   
    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        padding: 50px 50px;
        .book__image {
            img {
                display: block;
                margin: 0 auto;
                width: 50%;
            }
        }
        .book__info {
            width: 100%;
            margin-top: 20px;
            &-title {
                margin: 0;
                text-align: center;
            }
            &-authors {
                text-align: center;
            }
            &-category {
                display: block;
                margin-bottom: 15px;
            }
            &-pages {
                display: block;
            }
            &-published {
                display: block;
                margin-bottom: 55px;
            }
            a {
                display: block;
                text-decoration: none;
                font-size: 20px;
                text-align: center;
            }
        }
    } 
    @media (max-width: 600px) {
        .book__info {
            &-title {
                margin: 0;
                text-align: center;
                font-size: 18px;
            }
            &-authors {
                text-align: center;
                font-size: 14px;
            }
            a {
                display: block;
                text-decoration: none;
                font-size: 20px;
                text-align: center;
            }
        }
    } 
`;

export default BookDetailedStyled;