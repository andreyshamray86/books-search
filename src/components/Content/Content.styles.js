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
            z-index: 0;
        }
    }   
`

export default ContentStyled;