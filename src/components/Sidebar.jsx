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
        <a href="https://drive.google.com/file/d/12q4FMKlkwS2J-NDIpsa5DrFxhKbdLfly/" target="_blank" className="btn">Meu Currículo em Português</a>
        <a href="https://drive.google.com/file/d/1fBVo9LdpyN7JQ0n66VFnvPHl-4qw8NZR/" target="_blank" className="btn">Meu Currículo em Inglês</a>
        <a href="https://github.com/Filipe-Bacof/portifolio-filipe" target="_blank" className="btn">Ver Repositório deste Portifólio</a>
    </aside>
  )
}

export default Sidebar