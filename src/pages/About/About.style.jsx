import styled from 'styled-components';

export const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    row-gap: 2rem;
    padding-block: 3rem;

    img {
        height: 250px;
        width: 250px;
        border-radius: 100%;
        border: solid 3px #253659;
        padding: 5px;
    }
`
export const ContainerAboutMe = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    min-height: 85vh;

    h3 {
        font-size: 1.3rem;
    }   
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 600px;
    height: 400px;
    border: solid 1px #253659;
    border-radius: 8px;
    padding-inline: 25px;
    font-size: 1.1rem;
    letter-spacing: 1px;

    h2 {
        font-size: 2.2rem;
        margin-bottom: 40px;
        color: #0a0a0a;
        background-color: #F27457;
        padding-inline: 20px;
        border-radius: 8px;
    }

`