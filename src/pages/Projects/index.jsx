  // hooks
  import { useEffect, useState } from "react";

  // components
  import Card from "../../components/Card"

  // css
  import { ProjectsContainer, ProjectsList } from "./Projects.style"

  // axios
  import axios from 'axios';

  // página Projects 
  const Projects = () => {

    // iniciando state para armazenar meus repositórios do GitHub
    const [repositories, setRepositories] = useState([]);

    // utilizando hook useEffect para controlar a execução da função GET
    useEffect(() => {
      // inicializando função assíncrona
      const FindRepositories = async () => {
        try {
          // buscando dados com axios usando a própria API do GitHub com endpoint do meu usuário
          const response = await axios.get('https://api.github.com/users/thiagodeas/repos')
          // atualizando o state com os dados recebidos da API
          setRepositories(response.data);
        } catch (error) {
          // exibindo erro caso a requisição falhe
          console.error("Ocorreu um erro na requisição dos dados", error);
        }
      };
      // executando a função
      FindRepositories();
      // como o array de dependências está vazio, a função será executada apenas 
      // quando o componente for montado pela primeira vez
    }, [])

    return (
      // container pai estilizado
      <ProjectsContainer>
        <h2>Projetos</h2>
        {/* operador ternário para verificar se existem repositórios*/}
        {repositories.length > 0 ? (
          // renderizando a lista de Cards caso existam repositórios
          <ProjectsList>
            {repositories.map((repo) => (
              // criando um card para cada repositório existente, cada card recebe uma key, name
              // description e uma url vindas lá da requisição GET 
              <Card
                key={repo.id}
                name={repo.name}
                description={repo.description}
                html_url={repo.html_url}
              />
            ))}
          </ProjectsList>
          // exibindo mensagem de carregamento enquanto os repositórios são buscados
        ) : (
          <p>Carregando repositórios...</p>
        )
        }
      </ProjectsContainer>
    )
  }

  export default Projects;
