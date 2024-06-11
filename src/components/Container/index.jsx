// css
import { StyledContainer } from "./Container.style";

// componente funcional Container padrão que será usado em todas as pages
// espera prop Children para passar elementos filhos (os outros componentes, por exemplo)
const Container = ({ children }) => {
    return (
        // container estilizado
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default Container;