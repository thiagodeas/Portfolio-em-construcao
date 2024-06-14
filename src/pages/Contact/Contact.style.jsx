import styled from 'styled-components';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const ContainerContact = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    min-height: 85vh;

    h2 {
        font-size: 2.2rem;
        text-align: center;
        color: #0a0a0a;
        margin-bottom: 10px;
    }

    h3 {
        font-size: 1.3rem;
        color: #0a0a0a;
    }

    span {
        text-align: center;
        letter-spacing: 1px;
        font-size: 1.1rem;
        padding-left: 8px;
    }
`

export const ContainerContactMe = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 600px;
    height: 400px;
    border: 1px solid #253659;
    border-radius: 8px;
    padding-inline: 25px;
    row-gap: 1.2rem;
    letter-spacing: 1px;
`

export const Illustration = styled.img`
    height: 500px;
    width: 450px;
`

export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const GitHub = styled(FaGithub)`
    font-size: 1.8rem;
    border-radius: 5px;
    transition: 500ms;

    &:hover {
        color:#F27457;
        background-color: #253659;
        padding: 5px;
            }
`

export const LinkedIn = styled(FaLinkedin)`
    font-size: 1.8rem;
    border-radius: 5px;
    transition: 500ms;

    &:hover {
        color:#F27457;
        background-color: #253659;
        padding: 5px;
            }
`

export const Mail = styled(IoMdMail) `
    font-size: 1.8rem;
    border-radius: 5px;
    transition: 500ms;

    &:hover {
        color:#F27457;
        background-color: #253659;
        padding: 5px;
            }
`