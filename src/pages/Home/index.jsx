import { Link } from "react-router-dom";
import { ButtonLink, HomeInit, Presentation } from "./Home.style";

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
    </HomeInit>
  )
}

export default Home;