import '../styles/components/projects.sass';
import { FaGithub, FaYoutube } from 'react-icons/fa'
import { RiNavigationLine } from 'react-icons/ri'

import chatGPT from '../img/projects/chatgpt.png'
import doom from '../img/projects/Doom.jpg'
import netflix from '../img/projects/Netflix.png'
import nlwCopa from '../img/projects/NLW-Copa.png'
import nlwEsports from '../img/projects/NLW-Esports.png'
import nlwSpacetime from '../img/projects/NLW-Spacetime.png'
import nodejs from '../img/projects/nodeJS.png'
import pokemon from '../img/projects/pokebola-display-926x926.png'
import probabilidade from '../img/projects/probabilidade.jpg'
import resize from '../img/projects/resize.jpg'
import tmdb from '../img/projects/tmdb.jpeg'

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
        <h2>Alguns dos meus projetos</h2>
        <div className='projects-grid'>
          <div className='project-item'>
            <div className='logo-title'>
              <img src={nlwSpacetime} alt="Icon NLW Spacetime" />
              <h3>NLW Spacetime - Rocketseat</h3>
            </div>
            <p>
              Realizado entre os dias 15 e 19 de maio de 2023;<br/>
              Durante este evento pude aprimorar minhas habilidades de desenvolvimento full-stack e brincar um pouco com desenvolvimento mobile;<br/>
              Tecnologias utilizadas na trilha Ignite: NodeJS, Fastify, Prisma, Typescript, Zod, Autenticação JWT, GitHub O-Auth, NextJS, ReactJS, TailwindCSS, React Native e Expo.<br/>
              Para a trilha explorer fiz uma abordagem diferente, como eu queria ter o projeto no ar com minhas memórias, repliquei o projetinho simples utilizando NextJS e Tailwind.
            </p>
            <h4>Trilha Ignite</h4>
            <div className='links'>
              <a href="https://github.com/Filipe-Bacof/server-spacetime" target="_blank" className="btn-project-deploy"><FaGithub />&nbsp;&nbsp;Back-end</a>
              <a href="https://github.com/Filipe-Bacof/web-spacetime" target="_blank" className="btn-project-middle"><FaGithub />&nbsp;&nbsp;Front-end</a>
              <a href="https://github.com/Filipe-Bacof/mobile-spacetime" target="_blank" className="btn-project-github"><FaGithub />&nbsp;&nbsp;Mobile</a>
            </div>
            <h4>Trilha Explorer</h4>
            <div className='links2'>
              <a href="https://explorer-spacetime-black.vercel.app/" target="_blank" className="btn-project-deploy"><RiNavigationLine />&nbsp;&nbsp;Ver Deploy</a>
              <a href="https://github.com/Filipe-Bacof/explorer-spacetime" target="_blank" className="btn-project-github"><FaGithub />&nbsp;&nbsp;Ver Repositório</a>
            </div>
          </div>

          <div className='project-item'>
            <div className='logo-title'>
              <img src={chatGPT} alt="Icon Chat GPT" />
              <h3>Clone do Chat GPT</h3>
            </div>
            <p>
              Projeto efetuado utilizando o framework Next.JS e a API da OpenAI, que é a mesma utilizada pelo Chat GPT oficial;<br/>
              Clonar esta interface e integrar ela com a API foi uma experiência muito empolgante, descobri diversos recursos interessantes sobre a OpenAI para aplicar em projetos futuros;<br/>
              Neste projeto, como foi feito utilizando Next.JS, é recomendado utilizar o Tailwind CSS, as vezes fico verdadeiramente impressionado com a capacidade dessa ferramenta em aumentar fortemente a nossa produtividade.
            </p>
            <div className='links'>
              <a href="https://bacof-chat-gpt-clone.vercel.app/" target="_blank" className="btn-project-deploy"><RiNavigationLine />&nbsp;&nbsp;Ver Deploy</a>
              <a href="https://github.com/Filipe-Bacof/Chat-GPT-Clone" target="_blank" className="btn-project-github"><FaGithub />&nbsp;&nbsp;Ver Repositório</a>
            </div>
          </div>

          <div className='project-item'>
            <div className='logo-title'>
              <img src={nodejs} alt="Icon Node.JS" />
              <h3>API Node.JS - SmartClasses DB</h3>
            </div>
            <p>
              Projeto feito como teste técnico no processo de seleção para a empresa IMM Digital.<br/>
              Em apenas 3 dias, desenvolvi uma solução utilizando tecnologias como Node.js, Express, JavaScript, MongoDB, Mongoose e JsonWebToken (JWT).<br/>
              A implementação da autenticação JWT garantiu a segurança dos dados sensíveis, enquanto o Railway foi utilizado para hospedar a API.<br/>
              Apesar do prazo curto, enfrentei o desafio com determinação e entreguei um projeto funcional e bem estruturado.
            </p>
            <div className='links'>
              <a href="https://imm-teste-tecnico-backend.up.railway.app/" target="_blank" className="btn-project-deploy"><RiNavigationLine />&nbsp;&nbsp;Ver Deploy</a>
              <a href="https://github.com/Filipe-Bacof/imm-teste-tecnico-backend" target="_blank" className="btn-project-github"><FaGithub />&nbsp;&nbsp;Ver Repositório</a>
            </div>
          </div>

          <div className='project-item'>
            <div className='logo-title'>
              <img src={tmdb} alt="Icon TMDB" />
              <h3>Biblioteca de Filmes</h3>
            </div>
            <p>
              Aqui você consegue encontrar e pesquisar por filmes, e ver detalhes como orçamento, produtor, duração;<br/>
              Este projeto foi feito com React no curso do Hora de Codar, do professor Matheus Battisti;<br/>
              Foi utilizada a API disponibilizada pelo The Movie DataBase (TMDB).
            </p>
            <div className='links'>
              <a href="https://movies-lib-bacof.vercel.app/" target="_blank" className="btn-project-deploy"><RiNavigationLine />&nbsp;&nbsp;Ver Deploy</a>
              <a href="https://github.com/Filipe-Bacof/movies_lib" target="_blank" className="btn-project-github"><FaGithub />&nbsp;&nbsp;Ver Repositório</a>
            </div>
          </div>
          
          <div className='project-item'>
            <div className='logo-title'>
              <img src={netflix} alt="Icon Netflix" />
              <h3>Netflix Clone</h3>
            </div>
            <p>
              Executei este site enquanto estudava front-end utilizando React;<br/>
              Clonei apenas a interface da Netflix utilizando a API do The Movie DataBase (TMDB)<br/>
              Cada vez que atualizar a tela um novo filme será gerado na home, como este projeto é um pouco antigo, as vezes geram filmes sem sentido para estar "em alta", como achei isso engraçado mantive no projeto;<br/>
              O deploy foi feito no próprio GitHub Pages.
            </p>
            <div className='links'>
              <a href="https://filipe-bacof.github.io/netflix_clone/build/index.html" target="_blank" className="btn-project-deploy"><RiNavigationLine />&nbsp;&nbsp;Ver Deploy</a>
              <a href="https://github.com/Filipe-Bacof/netflix_clone" target="_blank" className="btn-project-github"><FaGithub />&nbsp;&nbsp;Ver Repositório</a>
            </div>
          </div>

          <div className='project-item'>
            <div className='logo-title'>
              <img src={nlwEsports} alt="Icon NLW E-Sports" />
              <h3>NLW E-Sports - Rocketseat</h3>
            </div>
            <p>
              Evento que ocorreu em Setembro de 2022, onde efetuei a trilha Explorer com este projeto de HTML, CSS e JavaScript;<br/>
              O objetivo era efetuei algo semelhante a um link-tree para gamers, gostei bastante do resultado com todas as animações;<br/>
              O desafio após o evento ficou de "clonar" o site utilizando outra temática, portanto fiz um link-tree para músicos.
            </p>
            <div className='links'>
              <a href="https://filipe-bacof.github.io/NLW_Rocketseat_Explorer_Esports/" target="_blank" className="btn-project-deploy"><RiNavigationLine />&nbsp;&nbsp;Ver Deploy</a>
              <a href="https://github.com/Filipe-Bacof/NLW_Rocketseat_Explorer_Esports" target="_blank" className="btn-project-middle"><FaGithub />&nbsp;&nbsp;Ver Repositório</a>
              <a href="https://filipe-bacof.github.io/Musicas-Bacof/" target="_blank" className="btn-project-github"><RiNavigationLine />&nbsp;&nbsp;Desafio Variação</a>
            </div>
          </div>

          <div className='project-item'>
            <div className='logo-title'>
              <img src={nlwCopa} alt="Icon NLW Copa" />
              <h3>NLW Copa - Rocketseat</h3>
            </div>
            <p>
              Evento que aconteceu em Outubro de 2022 promovido pela Rocketseat;<br/>
              Durante esse evento, tive a oportunidade de desenvolver várias ideias que aumentaram a complexidade do projeto. Como não havia uma API disponível com os resultados dos jogos, fiz todas as atualizações manualmente, o que tornou a experiência ainda mais desafiadora;<br/>
              Acompanhar esse evento gigante e desenvolver minhas habilidades foi uma experiência divertida, isso me motiva a retomar esse projeto durante a próxima copa, mas desta vez utilizando linguagens mais modernas e transformando-o em uma aplicação mobile em vez de apenas um site. Isso me permitirá explorar recursos avançados e fornecer uma experiência ainda melhor aos usuários. 
            </p>
            <div className='links'>
              <a href="https://filipe-bacof.github.io/Calendario-Jogos-Copa/" target="_blank" className="btn-project-deploy"><RiNavigationLine />&nbsp;&nbsp;Ver Deploy</a>
              <a href="https://github.com/Filipe-Bacof/Calendario-Jogos-Copa" target="_blank" className="btn-project-github"><FaGithub />&nbsp;&nbsp;Ver Repositório</a>
            </div>
          </div>

          <div className='project-item'>
            <div className='logo-title'>
              <img src={pokemon} alt="Icon Pokebola" />
              <h3>Pokédex</h3>
            </div>
            <p>
              Projeto utilizando HTML, CSS e JavaScript utilizando a PokéAPI.<br/>
              A PokéAPI oferece acesso a uma ampla gama de dados, incluindo informações detalhadas sobre cada Pokémon, como nome, habilidades, tipos, estatísticas, evoluções, sprites e muito mais. Ela também fornece informações sobre movimentos, itens, jogos e localizações encontradas nos jogos Pokémon.
            </p>
            <div className='links'>
              <a href="https://filipe-bacof.github.io/Pokedex/" target="_blank" className="btn-project-deploy"><RiNavigationLine />&nbsp;&nbsp;Ver Deploy</a>
              <a href="https://github.com/Filipe-Bacof/Pokedex" target="_blank" className="btn-project-github"><FaGithub />&nbsp;&nbsp;Ver Repositório</a>
            </div>
          </div>

          <div className='project-item'>
            <div className='logo-title'>
              <img src={resize} alt="Icon Resize" />
              <h3>Aprenda Media Queries do CSS3</h3>
            </div>
            <p>
              Criei este repositório no GitHub para fornecer um exemplo mais claro do conceito de Media Queries do CSS3. As Media Queries são um recurso poderoso que permite adicionar responsividade aos sites, permitindo que sejam visualizados e utilizados em diferentes tamanhos de tela, como em dispositivos móveis, tablets e desktops;<br/>
              A intenção é ajudar os desenvolvedores a compreenderem e dominarem o uso das Media Queries, permitindo que criem sites adaptáveis e amigáveis para diferentes contextos de visualização. Sinta-se à vontade para explorar o repositório, cloná-lo e utilizar o código como base para seus próprios projetos. Espero que esse recurso seja útil para você e contribua para o seu aprendizado sobre responsividade no desenvolvimento web.
            </p>
            <div className='links'>
              <a href="https://github.com/Filipe-Bacof/Media-Queries-CSS" target="_blank" className="btn"><FaGithub />&nbsp;&nbsp;Ver este Projeto</a>
            </div>
          </div>

          <div className='project-item'>
            <div className='logo-title'>
              <img src={probabilidade} alt="Icon Probabilidade" />
              <h3>Monty Hall - Porta Premiada</h3>
            </div>
            <p>
              Desenvolvi este projeto utilizando Next.js e Tailwind CSS, com o objetivo de proporcionar uma explicação sobre o enigma estatístico e paradoxal de Monty Hall.
            </p>
            <div className='links'>
              <a href="https://porta-premiada-curso-cod3r.vercel.app/" target="_blank" className="btn-project-deploy"><RiNavigationLine />&nbsp;&nbsp;Ver Deploy</a>
              <a href="https://github.com/Filipe-Bacof/porta-premiada" target="_blank" className="btn-project-github"><FaGithub />&nbsp;&nbsp;Ver Repositório</a>
            </div>
          </div>

          <div className='project-item'>
            <div className='logo-title'>
              <img src={doom} alt="Icon Doom" />
              <h3>Doom Fire - Filipe Deschamps</h3>
            </div>
            <p>Fazer esse projeto junto com o Filipe Deschamps é o que pode fazer você se apaixonar por programação, tive diversas idéias que estão registradas para treinar melhor minhas habilidades de desenvolvimento front-end.</p>
            <div className='links'>
              <a href="https://filipe-bacof.github.io/Domm-Fire-Deschamps/projeto%20limpo/index.html" target="_blank" className="btn-project-deploy"><RiNavigationLine />&nbsp;&nbsp;Ver Deploy</a>
              <a href="https://github.com/Filipe-Bacof/Domm-Fire-Deschamps" target="_blank" className="btn-project-middle"><FaGithub />&nbsp;&nbsp;Ver Repositório</a>
              <a href="https://www.youtube.com/watch?v=HCjDjsHPOco" target="_blank" className="btn-project-github"><FaYoutube />&nbsp;&nbsp;Filipe Deschamps</a>
            </div>
          </div>
        </div>
    </section>
  )
}

export default ProjectsContainer