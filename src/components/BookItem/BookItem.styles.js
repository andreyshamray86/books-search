import styled from "styled-components";

const BookItemStyled = styled.div`
    width: 200px;
    height: 300px;
	margin: 10px;
	background-color: white;
	box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    cursor: pointer;
	&:hover {
        img {
            filter: brightness(0.5)
        }
		div{
            transition: all 0.4s;
            transform: translateY(-270px); 
        }
	}

	div {
        padding: 0 10px;
        transform: translateY(-170px);
        transition: all 0.4s;
	}

	h2 {
		display: block;
        margin: 0;
		font-size: 18px;
		text-shadow: 0px 1px 5px black;
        color: #fff;
        text-align: center;
        margin-bottom: 15px;
	}

	p {
		display: block;
		font-size: 14px;
        color: #fff;
        text-align: center;
        margin-bottom: 25px;
	}

	a {
		display: block;
        margin: 0 auto;
        width: 50%;
		padding: 5px 10px;
		color: white;
		border: 1px solid white;
		font-size: 12px;
		text-transform: uppercase;
		text-decoration: none;
        text-align: center;

		&:hover {
			color: black;
			background-color: white;
		}
	}
`;

export default BookItemStyled;