import '../styles/components/projects.sass';
import { FaGithub, FaYoutube } from 'react-icons/fa'
import { RiNavigationLine } from 'react-icons/ri'

import chatGPT from '../img/projects/chatgpt.png'
import nlwEsports from '../img/projects/NLW-Esports.png'
import nlwSpacetime from '../img/projects/NLW-Spacetime.png'
import nodejs from '../img/projects/nodeJS.png'
import pokebola from '../img/projects/pokebola.png'
import tasks from '../img/projects/tasks.png'
import tmdb from '../img/projects/tmdb.jpeg'
import lokos from '../img/projects/lokos.png'
import metallica from '../img/projects/metallica.jpg'

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
        <h2>Alguns dos meus projetos</h2>
        <div className='projects-grid'>

          <div className='project-item'>
            <div className='logo-title'>
              <img src={lokos} alt="Logo da banda Lokos d Bira" />
              <h3>Site para a banda Lokos d Bira</h3>
            </div>
            <p>
              Web App Full-Stack desenvolvida em conjunto com amigos para a banda mais carismática de Esteio-RS, projeto elaborado durante o mês de agosto de 2023.<br/>
              No Back-end foi utilizado NodeJS com express, banco de dados mongoDB em conjunto com firebase para armazenamento de mídias e hospedado na Vercel.<br/>
              Já o Front-end a estratégia foi utilizar React com Typescript, utilizando o framework Next.JS, foi um desafio criar o componente da televisão que está na aba de vídeos, mas o total foco foi não fazer parecer um site criado a partir de template, e sim algo com a cara e identidade da banda.<br/>
              O ponto chave para esse projeto é que se você pesquisar no google o nome da banda, deve encontrar nos primeiros resultados o site, já que foram feitas várias melhorias de SEO que o NextJS possibilita.
            </p>
            <div className='links'>
              <a href="https://lokosdbira.com.br/" target="_blank" className="btn-project-deploy"><RiNavigationLine />&nbsp;&nbsp;Ver Site da banda</a>
              <a href="https://lokosdbira.vercel.app/" target="_blank" className="btn-project-github"><RiNavigationLine />&nbsp;&nbsp;Link Alternativo</a>
            </div>
          </div>

          <div className='project-item'>
            <div className='logo-title'>
              <img src={metallica} alt="Letra M do logo do Metallica" />
              <h3>Metallica API</h3>
            </div>
            <p>
              Projeto Back-end criado com Node, Typescript e PostgreSQL usando o PrismaORM, criado para celebrar o dia do Rock em 2023, e posteriormente melhorado e adicionadas várias outras funcionalidades.<br/>
              Em primeiro momento a aplicação fazia CRUD completo para todos os tipos de dados, mas optei em segundo momento de disponibilizar apenas endpoints de retornos de dados, o deploy mais recente foi efetuado na plataforma da Render.<br/>
              O link para o deploy que eu disponibilizei agora está com o endpoint que irá retornar uma música aleatória, ao clicar ele abrirá no navegador uma música nova a cada requisição<br/>
              Sou um grande fã dessa banda e criei esse projeto no intuito de fazer networking com outros desenvolvedores front-end, caso você crie uma aplicação utilizando minha API, entre em contato por E-mail ou LinkedIn, será um prazer incluir o link para sua aplicação aqui no meu portifólio.
            </p>
            <div className='links'>
            <a href="https://metallica-api.onrender.com/song/random" target="_blank" className="btn-project-deploy"><RiNavigationLine />&nbsp;&nbsp;Ver Deploy</a>
            <a href="https://github.com/Filipe-Bacof/metallica-api" target="_blank" className="btn-project-github"><FaGithub />&nbsp;&nbsp;Ver Repositório</a>
            </div>
          </div>

          <div className='project-item'>
            <div className='logo-title'>
              <img src={pokebola} alt="Icone Pokebola" />
              <h3>Pokédex (pokeAPI)</h3>
            </div>
            <p>
              Todo programador tem que ter desenvolvido uma pokedéx em algum momento da vida hahaha
              Essa aplicação Front-End foi criada entre os dias 28 de Junho e 02 de Julho de 2023.<br/>
              Criei esse projeto utilizando minha biblioteca de estilização favorita que é o TailwindCSS, ao invés de pegar uma imagem pronta da pokedéx, preferi criar ela do zero usando CSS, tudo que você enxerga tirando as imagens de fundo e o pokémon, foram feitas com CSS.<br/>
              A tela principal onde está a pokédex foi o que me deu mais insights, pois adicionei funcionalidades aos botões do topo, me atentei aos detalhes para tornar a experiência de quem usar esse site mais nostalgica.<br/>
              Utilizei Next.JS como framework para o desenvolvimento, e o deploy está hospedado no Vercel.<br/>
              Este projeto foi feito como desafio técnico para uma vaga Full-Stack.
            </p>
            <div className='links'>
              <a href="https://pokedex-bacof.vercel.app" target="_blank" className="btn-project-deploy"><RiNavigationLine />&nbsp;&nbsp;Ver Deploy</a>
              <a href="https://github.com/Filipe-Bacof/pokedex-inb" target="_blank" className="btn-project-github"><FaGithub />&nbsp;&nbsp;Ver Repositório</a>
            </div>
          </div>

          <div className='project-item'>
            <div className='logo-title'>
              <img src={tasks} alt="Gerenciador de Tarefas" />
              <h3>Gerenciador de Tarefas</h3>
            </div>
            <p>
              Aplicação Full-Stack feita para gerenciar tarefas, desenvolvida entre os dias 24 e 26 de junho de 2023.<br/>
              No Back-end utilizei NodeJS com express, sequelize, postgreSQL e hospedei na plataforma Railway.<br/>
              Para o Front-end a estratégia foi utilizar React com Typescript, alguns componentes prontos do MaterialUI, várias bibliotecas para React (como toastify, hook form, zustand, tanstack react query...)<br/>
              Esta aplicação foi feita como desafio técnico para uma vaga Full-Stack.
            </p>
            <div className='links'>
              <a href="https://github.com/Filipe-Bacof/olhar180-backend-desafio" target="_blank" className="btn-project-deploy"><FaGithub />&nbsp;&nbsp;Back-end</a>
              <a href="https://github.com/Filipe-Bacof/olhar180-frontend-desafio" target="_blank" className="btn-project-github"><FaGithub />&nbsp;&nbsp;Front-end</a>
              {/* <a href="https://olhar180-frontend-desafio.vercel.app" target="_blank" className="btn-project-github"><RiNavigationLine />&nbsp;&nbsp;Ver Deploy</a> */}
            </div>
          </div>

          <div className='project-item'>
            <div className='logo-title'>
              <img src={nodejs} alt="Icon Node.JS" />
              <h3>API Node.JS - Gerenciamento de Aulas</h3>
            </div>
            <p>
              Projeto Back-End feito como teste técnico para uma vaga Full-Stack.<br/>
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