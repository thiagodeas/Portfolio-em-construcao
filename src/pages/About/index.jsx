import { ContainerIcons, StyledCSSIcon, StyledHTMLIcon, StyledJSIcon, StyledReactIcon, StyledTSIcon } from "../Home/Home.style"
import { ContainerAboutMe, Description, Profile } from "./About.style"
import profile from "./images/profile.jpg"

const About = () => {
  return (
    <ContainerAboutMe>
      <Profile>
        <img src={profile}></img>
        <h3>Principais Tecnologias</h3>
        <ContainerIcons>
          {/* ícone do React */}
          <StyledReactIcon />
          {/* ícone do JavaScript */}
          <StyledJSIcon />
          {/* ícone do TypeScript */}
          <StyledTSIcon />
          {/* ícone do CSS */}
          <StyledCSSIcon />
          {/* ícone do HTML */}
          <StyledHTMLIcon />
        </ContainerIcons>
        </Profile>
      <Description>
        <h2>Sobre mim</h2>
        <p>Meu nome é Thiago, tenho 22 anos, atualmente estou cursando o terceiro semestre em Análise e Desenvolvimento de Sistemas e sou um apaixonado por tecnologia que decidiu seguir no caminho da programação. Com uma base sólida em React, estou focado em desenvolver interfaces, sites e aplicações dinâmicas e responsivas, criando soluções em software de alta qualidade. Estou animado para enfrentar novos desafios e contribuir para equipes que valorizam a qualidade e a inovação no desenvolvimento de software.
        </p>
        </Description>
      </ContainerAboutMe>
  )
}

export default About;
