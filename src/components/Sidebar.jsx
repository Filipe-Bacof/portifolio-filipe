import SocialNetworks from './SocialNetworks';

import Avatar from '../img/ProfilePic.jpg';

import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} alt="Foto de Perfil Filipe Bacof" />
        <p className="title">Desenvolvedor Full-Stack</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="https://github.com/Filipe-Bacof/portifolio-filipe/raw/master/public/curriculo-filipe-bacof.pdf" target="_blank" className="btn">Baixe meu Currículo (Português)</a>
        <a href="https://github.com/Filipe-Bacof/portifolio-filipe/raw/master/public/resume-filipe-bacof.pdf" target="_blank" className="btn">Baixe meu Currículo (Inglês)</a>
        <a href="https://filipe-bacof.github.io/Meus-Certificados/" target="_blank" className="btn">Ver Meus Certificados</a>
        <a href="https://github.com/Filipe-Bacof/portifolio-filipe" target="_blank" className="btn">Ver Repositório deste Portifólio</a>
        <a href="https://github.com/Filipe-Bacof/Media-Queries-CSS" target="_blank" className="btn">Aprenda Media Queries do CSS3</a>
        <a href="https://bacof-chat-gpt-clone.vercel.app/" target="_blank" className="btn">Clone do Chat GPT</a>
        <a href="https://movies-lib-bacof.vercel.app/" target="_blank" className="btn">Biblioteca de Filmes</a>
    </aside>
  )
}

export default Sidebar