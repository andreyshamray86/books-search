import styled from "styled-components";

import background from '../../images/backgorund.jpg'
import search from '../../images/search-gray.svg'

const HeaderStyled = styled.div`
    width: 100%;
    min-height: 30%;
    background: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), 
    url(${background}) center center no-repeat;
    padding-top: 50px;
    padding-bottom: 20px;
    h1 {
        margin: 0;
        color: #fff;
        font-size: 48px;
        text-align: center;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #000;
    }
    div {
        position: relative;
        &::before {
            content: '';
            width: 24px;
            height: 24px;
            background: url(${search}) center center no-repeat;
            position: absolute;
            top: 12px;
            left: 24%;
        }
    }
    input {
        display: block;
        margin: 0 auto;
        margin-top: 80px;
        width: 50%;
        height: 40px;
        padding: 5px 20px 5px 50px;
        border: 0;
        border-radius: 5px;
        font-size: 20px;
        color: #905252;
        &:focus {
            outline: none;
            box-shadow: inset 0px 0px 10px #905252;
            transition: all 0.3s;
        }
    }
    button {
        position: relative;
        display: block;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 50px;
        width: 200px;
        height: 40px;
        font-size: 16px;
        color: #905252;
        cursor: pointer;
        &::before {
            content: '';
            position: absolute;
            top: calc(50% - 12px);
            left: calc(50% - 12px);
            background: url(${search}) center center no-repeat;
            width: 0;
            height: 0;
        }
        &:hover {
            color: transparent;
            transition: all 0.3s;
            &::before {
                width: 24px;
                height: 24px;

            }
        }
    }
    .placeholder {
        &::-webkit-input-placeholder  {
            color:#905252;
            font-size: 20px;
            -webkit-transition: all 0.2s ease;
            -ms-transition: all 0.2s ease;
            -moz-transition: all 0.2s ease;
            -o-transition: all 0.2s ease;
            transition: all 0.2s ease;
        }
        &::-moz-placeholder   {
            color:#905252;
            -webkit-transition: all 0.2s ease;
            -ms-transition: all 0.2s ease;
            -moz-transition: all 0.2s ease;
            -o-transition: all 0.2s ease;
            transition: all 0.2s ease;
        }
        &:-moz-placeholder   {
            color:#905252;
            -webkit-transition: all 0.2s ease;
            -ms-transition: all 0.2s ease;
            -moz-transition: all 0.2s ease;
            -o-transition: all 0.2s ease;
            transition: all 0.2s ease;
        }
        &:focus {
            &::-webkit-input-placeholder  {color:transparent;}
            &::-moz-placeholder   {color:transparent;}
            &:-moz-placeholder   {color:transparent;}
        }
    }
`;

export default HeaderStyled;