// css
import { ErrorContainer, ErrorMessage } from "./Page404.style";

// página 404 do projeto
const Page404 = () => {
  return (
    <>
    {/* h2 estilizado */}
    <ErrorMessage>Algo de errado não está certo =/ </ErrorMessage>
    
    {/* container estilizado com span e parágrafo embutido */}
    <ErrorContainer>
        <span>404</span>
        <p>Página não localizada!</p>
    </ErrorContainer>
    </>
  )
}

export default Page404;
