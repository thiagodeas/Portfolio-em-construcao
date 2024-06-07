import { ButtonLink, ContainerIllustration, HomeInit, Illustration, Presentation, StyledReactIcon } from "./Home.style";

const Home = () => {
  return (
    <HomeInit>
        <Presentation>
            <p>
                Olá, sou <br />
                <span>Thiago Sousa</span> <br />
                Desenvolvedor Front-End
            </p>
            <ButtonLink to="/aboutme">Saiba mais sobre mim</ButtonLink>
        </Presentation>
        <ContainerIllustration>
        <Illustration src="/developer.svg" alt="Developer Illustration"/>
        <StyledReactIcon />
        </ContainerIllustration>
    </HomeInit>
  )
}

export default Home;