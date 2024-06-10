import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header `
    width: 100%;
    height: 60px;
    background-color: #253659;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    span {
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 3px;
        transition: 400ms;

        &:hover {
            color: #F27457;
        }
    }
`

export const StyledLink = styled(Link) `
    text-decoration: none;
    color: #fff;
    padding-right: 2rem;
    transition: 400ms;
    font-weight: 600;
    letter-spacing: 1px;

    &:hover {
        color:  #F27457;
    }

    :active {
        color: #415A77;
        font-weight: 800; 
    }
`