import { ErrorContainer, ErrorMessage } from "./Page404.style";

const Page404 = () => {
  return (
    <>
    <ErrorMessage>Algo de errado não está certo =/ </ErrorMessage>
    <ErrorContainer>
        <span>404</span>
        <p>Página não localizada!</p>
    </ErrorContainer>
    </>
  )
}

export default Page404;