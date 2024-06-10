import { Link } from "react-router-dom";
import { ArrowButton, CardContainer, CardFooter } from "./Card.style";

const Card = ({ name, description, html_url }) => {
    return (
        <CardContainer>
            <h3>{name}</h3>
            <p>{description}</p>
            <CardFooter>
                <Link to={html_url} target="_blank">
                    <ArrowButton />
                </Link>
            </CardFooter>

        </CardContainer>
    )
}

export default Card;
