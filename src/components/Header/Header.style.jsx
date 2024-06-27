import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header `
    width: 100%;
    height: 60px;
    background-color: #253659;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
    gap: 10px;
    
    span {
        font-size: 1.7rem;
        font-weight: 800;
        letter-spacing: 3px;
        transition: 500ms;

        &:hover {
            color: #F27457;
        }
    }
`

export const StyledNav = styled.nav `
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

export const StyledLink = styled(NavLink) `
    text-decoration: none;
    color: #fff;
    padding-right: 2rem;
    transition: 500ms;
    font-size: 1.05rem;

    &:hover {
        color:  #F27457;
    }

    &.active {
        color: #F27457;
    }
`