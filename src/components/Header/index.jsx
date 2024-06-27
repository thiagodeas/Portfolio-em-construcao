// react-router-dom
import { Link } from "react-router-dom";

// css
import { StyledHeader, StyledLink, StyledNav } from "./Header.style";

const Header = () => {
    return (
        // container pai estilizado
        <StyledHeader>
            {/* link (botão) do react-router no span, redirecionando para a página Home*/}
            <Link to="/">
                <span>Thiago Sousa</span>
            </Link>
            {/* container pai dos links do cabeçalho*/}
            <StyledNav>
                {/* link estilizado que redireciona para a página Home */}
                <StyledLink to="/">Início</StyledLink>
                {/* link estilizado que redireciona para a página About */}
                <StyledLink to="/aboutme">Sobre mim</StyledLink>
                {/* link estilizado que redireciona para a página Projects */}
                <StyledLink to="/projects">Projetos</StyledLink>
                {/* link estilizado que redireciona para a página Contact */}
                <StyledLink to="/contact">Contato</StyledLink>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header;