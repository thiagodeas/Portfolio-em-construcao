import styled from 'styled-components';
import { FaArrowRight } from "react-icons/fa";

export const CardContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 300px;
    width: 300px;
    padding: 20px;
    border-radius: 12px;
    color: #F27457;
    background-color: #253659;
    box-shadow: 4px 4px 4px #F27457;
    text-align: center;
    box-sizing: border-box;
`
export const CardFooter = styled.div`
    display: flex;
    align-self: flex-end;
    justify-content: center;
`

export const ArrowButton = styled(FaArrowRight)`
    background-color: #04BF9D;
    color: #253659;
    text-decoration: none;
    outline: none;
    border-radius: 8px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 700ms;

    &:hover {
        background-color: #F27457;
    }
`