import { ContainerContact, ContainerContactMe, GitHub, Icons, Illustration, LinkedIn, Mail } from "./Contact.style";

const Contact = () => {
  return (
    <ContainerContact>
      <ContainerContactMe>
        <h2>Contato</h2>
        <h3>Sinta-se à vontade para entrar em contato comigo:</h3>
        <Icons>
        <a href="mailto:sousaalvesth@gmail.com" target="_blank">
          <Mail />
        </a>
        <span>sousaalvesth@gmail.com</span>
        </Icons>
        <h3>Você também pode me encontrar nas redes sociais:</h3>
        <Icons>
        <a href="https://github.com/thiagodeas" target="_blank">
        <GitHub />
        </a>
        <span>/thiagodeas</span>
        </Icons>
        <Icons>
          <a href="https://www.linkedin.com/in/thiagodsousa/" target="_blank">
          <LinkedIn />
          </a>
          <span>/thiagodsousa</span>
        </Icons>
      </ContainerContactMe>
      <div>
      <Illustration src="/contact-illustration.svg"></Illustration>
      </div>
    </ContainerContact>
  )
}

export default Contact;
