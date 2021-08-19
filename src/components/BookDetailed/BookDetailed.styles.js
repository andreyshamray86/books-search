import styled from "styled-components";

const BookDetailedStyled = styled.div`
    position: relative;
    padding: 50px 100px;
    display: flex;
    justify-content: space-around;
    
    .book__image {
        img {
            width: 100%;
            height: 100%;
        }
    }
    .book__info {
        width: 50%;
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
`;

export default BookDetailedStyled;