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
        <a href="https://github.com/Filipe-Bacof/portifolio-filipe" target="_blank" className="btn">Ver Repositório deste Portifólio</a>
    </aside>
  )
}

export default Sidebar