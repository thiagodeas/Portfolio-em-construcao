// react-router-dom
import { Link } from "react-router-dom";

// css
import { ArrowButton, CardContainer, CardFooter } from "./Card.style";

// componente funcional que vai conter os Cards, recebendo 3 parâmetros 
const Card = ({ name, description, html_url }) => {

    return (
        // container pai estilizado
        <CardContainer>
            {/* h3 espera parâmetro name para renderizar em tela*/}
            <h3>{name}</h3>
            {/* parágrafo espera parâmetro description para renderizar em tela*/}
            <p>{description}</p>
            {/* container filho estilizado*/}
            <CardFooter>
                {/* link (botão) do react-router que espera parâmetro url para redirecionar */}
                <Link to={html_url} target="_blank">
                    {/* ícone de seta do react-icons */}
                    <ArrowButton />
                </Link>
            </CardFooter>
        </CardContainer>
    )
    
}

export default Card;
