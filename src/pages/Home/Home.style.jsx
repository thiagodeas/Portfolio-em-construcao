import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FaReact } from "react-icons/fa";

export const HomeInit = styled.section`
    width: 100%;
    min-height: 85vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;    
`

export const Presentation = styled.div`
    margin-left: 2rem;

    p {
        font-size: 2.6rem;
        font-weight: 600;
        color: #012340;
        margin: 0px 0px 2rem 4rem;
    }

    span {
        font-size: 3.8rem;
        font-weight: 600;
        color: #04D939;
    }
`

export const ButtonLink = styled(Link)`
    border: none;
    background-color: #03A63C;
    color: #fff;
    font-size: 1.125rem;
    font-weight: 800;
    text-align: center;
    width: 250px;
    height: 50px;
    border-radius: 8px;
    padding: 0px 12px;
    cursor: pointer;
    transition: 900ms;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin-left: 4rem;

    &:hover {
        background-color: #04D939;
    }

`

export const ContainerIllustration = styled.figure`
    display: flex;
    flex-direction: column-reverse;
`

export const Illustration = styled.img`
    height: 400px;
    width: 400px;
`

const rotate = keyframes`
    0% {
        transform: translateY(0px);
        color: #03A63C;
    } 
    25% {
        transform: translateY(-15px);
    } 
    50% {
        transform: translateY(0px);
        color: #04D939;
    } 
    75% {
        transform: translateY(15px);
    } 
    100% {
        transform: translateY(0px);
        color: #03A63C;
    }
`

export const StyledReactIcon = styled(FaReact)`
    color: #04D939;
    font-size: 4rem;
    animation: ${rotate} 20s linear infinite;
`
