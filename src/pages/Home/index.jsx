import { IoLogoJavascript } from "react-icons/io";
import { ButtonLink, ContainerIcons, ContainerIllustration, HomeInit, Illustration, Presentation, StyledCSSIcon, StyledHTMLIcon, StyledJSIcon, StyledReactIcon, StyledTSIcon } from "./Home.style";
import { MdCss } from "react-icons/md";

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
        <Illustration src="/developer-home.svg" alt="Developer Illustration" />
        <ContainerIcons>
          <StyledReactIcon />
          <StyledJSIcon />
          <StyledTSIcon />
          <StyledCSSIcon/>
          <StyledHTMLIcon />
        </ContainerIcons>
      </ContainerIllustration>
    </HomeInit>
  )
}

export default Home;