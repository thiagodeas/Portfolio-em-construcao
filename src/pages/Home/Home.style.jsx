import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { MdCss, MdHtml } from "react-icons/md";
import { SiTypescript } from "react-icons/si";

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
        color:   #253659;
        margin: 0px 0px 2rem 4rem;
    }

    span {
        font-size: 3.8rem;
        font-weight: 600;
        color: #F27457;
    }
`

export const ButtonLink = styled(Link)`
    border: none;
    background-color:  #F27457;
    color: #fff;
    font-size: 1.125rem;
    font-weight: 800;
    text-align: center;
    width: 250px;
    height: 50px;
    border-radius: 8px;
    padding: 0px 12px;
    cursor: pointer;
    transition: 800ms;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin-left: 4rem;

    &:hover {
        background-color: #BF665E;
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
    } 
    25% {
        transform: translateY(-15px);
    } 
    50% {
        transform: translateY(0px);
    } 
    75% {
        transform: translateY(15px);
    } 
    100% {
        transform: translateY(0px);
    }
`

export const ContainerIcons = styled.div `
    display: flex;
    gap: 20px;
`

export const StyledReactIcon = styled(FaReact)`
    font-size: 3.5rem;
    animation: ${rotate} 20s linear infinite;
    color: #56d4f4;
`

export const StyledJSIcon = styled(IoLogoJavascript)`
    background-color: yellow;
    font-size: 2.8rem;
    animation: ${rotate} 20s linear infinite;
`

export const StyledCSSIcon = styled (MdCss)`
    font-size: 3.5rem;
    animation: ${rotate} 20s linear infinite;
    color: #206dcc;
`

export const StyledHTMLIcon = styled (MdHtml)`
    font-size: 3.5rem;
    animation: ${rotate} 20s linear infinite;
    color: #eb6630;
`
export const StyledTSIcon = styled (SiTypescript)`
    color: #347bc8;
    font-size: 2.8rem;
    animation: ${rotate} 20s linear infinite;   
`
