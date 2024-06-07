import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header `
    width: 100%;
    height: 60px;
    background-color: #012340;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    span {
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: 3px;

        &:hover {
            color: #04D939;
        }
    }
`

export const StyledLink = styled(Link) `
    color: #fff;
    padding-right: 2rem;
    letter-spacing: 1px;

    &:hover {
        color: #04D939;
    }
`