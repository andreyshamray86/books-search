import styled from "styled-components";

const BookItemStyled = styled.div`
	position: relative;
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
		background-color: #333333;
        img {
            filter: brightness(0.3)
        }
		div{
            transition: all 0.4s;
            transform: translateY(40px);
			
        }
	}

	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	div {
        padding: 0 10px;
        transform: translateY(400px);
        transition: all 0.4s;
	}

	h2 {
		display: block;
        margin: 0;
		font-size: 16px;
		text-shadow: 0px 1px 10px black;
        color: #fff;
        text-align: center;
        margin-bottom: 10px;
	}

	p {
		display: block;
		font-size: 14px;
        color: #fff;
        text-align: center;
        margin-bottom: 15px;
		text-shadow: 0px 1px 10px black;
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