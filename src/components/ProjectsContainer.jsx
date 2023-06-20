import '../styles/components/projects.sass';
import { FaGithub, FaYoutube } from 'react-icons/fa'
import { RiNavigationLine } from 'react-icons/ri'

import chatGPT from '../img/projects/chatgpt.png'
import netflix from '../img/projects/Netflix.png'
import nlwEsports from '../img/projects/NLW-Esports.png'
import nlwSpacetime from '../img/projects/NLW-Spacetime.png'
import nodejs from '../img/projects/nodeJS.png'
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
              <h3>API Node.JS - Desafio Técnico</h3>
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


        </div>
    </section>
  )
}

export default ProjectsContainer