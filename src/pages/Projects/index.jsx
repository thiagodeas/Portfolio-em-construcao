import { useEffect, useState } from "react";
import Card from "../../components/Card"
import { ProjectsContainer, ProjectsList } from "./Projects.style"
import axios from 'axios';

const Projects = () => {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const FindRepositories = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/thiagodeas/repos')
        setRepositories(response.data);
      } catch (error) {
        console.error("Ocorreu um erro na requisição dos dados", error);
      }
    };
    FindRepositories();
  }, [])

  return (
    <ProjectsContainer>
      <h2>Projetos</h2>
      {repositories.length > 0 ? (
        <ProjectsList>
          {repositories.map((repo) => (
            <Card
              key={repo.id}
              name={repo.name}
              description={repo.description}
              html_url={repo.html_url}
            />
          ))}
        </ProjectsList>
      ) : (
        <p>Carregando repositórios...</p>
      )
      }
    </ProjectsContainer>
  )
}

export default Projects;
