import styled from "styled-components";

import content from '../../images/content.jpg'

const ContentStyled = styled.div`
    height: 70%;
    background: url(${content}) center center no-repeat;
    padding: 50px 100px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
`

export default ContentStyled;