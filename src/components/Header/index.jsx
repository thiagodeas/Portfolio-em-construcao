import { Link } from "react-router-dom";
import { StyledHeader, StyledLink } from "./Header.style";

const Header = () => {
    return (
        <StyledHeader>
            <Link to="/">
                <span>Thiago Sousa</span>
            </Link>
            <nav>
                <StyledLink to="/">Início</StyledLink>
                <StyledLink to="/aboutme">Sobre mim</StyledLink>
                <StyledLink to="/projects">Projetos</StyledLink>
                <StyledLink to="/contact">Contato</StyledLink>
            </nav>
        </StyledHeader>
    )
}

export default Header;