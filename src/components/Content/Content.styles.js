import styled from "styled-components";

const ContentStyled = styled.div`
    position: relative;
    padding: 50px 100px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
    justify-items: center;
    .content {
        &__title {
            display: block;
            grid-column: 3/5;
            color:#905252; 
            font-size: 36px;
            margin: 0 auto;
            margin-bottom: 370px;
            z-index: 10;
        }

        &__image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
        }
    }
    @media (max-width: 1600px) {
        grid-template-columns: repeat(4, 1fr);
        .content {
            &__title {
                grid-column: 2/4;
            }
        }
    }   
    @media (max-width: 1100px) {
        grid-template-columns: repeat(3, 1fr);
        .content {
            &__title {
                grid-column: 1/4;
            }
        }
    } 
    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    } 
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        padding: 50px 50px;
        .content {
            &__title {
                font-size: 24px;
            }
        }
    }         
`

export default ContentStyled;