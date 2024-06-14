import styled from 'styled-components';

export const ErrorMessage = styled.h2 `
    color: #253659;
    padding-top: 5rem;
`

export const ErrorContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
        font-size: 15rem;
        font-weight: 800;
        color: #F27457;
    }

    p {
        font-size: 1.2rem;
        font-weight: 600;
        color: #253659;
    }
`