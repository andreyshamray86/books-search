import styled from "styled-components";

const ContentStyled = styled.div`
    position: relative;
    padding: 50px 100px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
    .content {
        &__title {
            display: block;
            grid-column: 3/5;
            color:#905252; 
            font-size: 36px;
            margin: 0 auto;
            z-index: 10;
        }

        &__image {
            position: absolute;
            width: 100%;
            height: min-content;
            z-index: 0;
        }
    }
    @media (max-width: 1600px) {
        grid-template-columns: repeat(4, 1fr);
    }   
    @media (max-width: 1100px) {
        grid-template-columns: repeat(3, 1fr);
    } 
    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    } 
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }         
`

export default ContentStyled;