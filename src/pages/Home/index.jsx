// css
import { 
ButtonLink, 
ContainerIcons, 
ContainerIllustration, 
HomeInit, 
Illustration, 
Presentation, 
StyledCSSIcon, 
StyledHTMLIcon, 
StyledJSIcon, 
StyledReactIcon, 
StyledTSIcon 
} from "./Home.style";

// página Home do projeto
const Home = () => {
 
  return (
    // container pai estilizado
    <HomeInit>
      {/* container da apresentação estilizado */}
      <Presentation>
        {/* parágrafo com span embutido para apresentação */}
        <p>
          Olá, sou <br />
          <span>Thiago Sousa</span> <br />
          Desenvolvedor Front-End
        </p>
        {/* link (botão) do react-router que redireciona para a página About */}
        <ButtonLink to="/aboutme">Saiba mais sobre mim</ButtonLink>
      </Presentation>
      {/* container contendo os ícones e a imagem estilizado */}
      <ContainerIllustration>
        {/* imagem ilustrativa da página Home */}
        <Illustration src="/developer-home.svg" alt="Developer Illustration" />
        <ContainerIcons>
          {/* ícone do React */}
          <StyledReactIcon />
          {/* ícone do JavaScript */}
          <StyledJSIcon />
          {/* ícone do TypeScript */}
          <StyledTSIcon />
          {/* ícone do CSS */}
          <StyledCSSIcon/>
          {/* ícone do HTML */}
          <StyledHTMLIcon />
        </ContainerIcons>
      </ContainerIllustration>
    </HomeInit>
  )

}

export default Home;
