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
        <a href="public/curriculum-portuguese.pdf" download="Currículo Filipe Bacof.pdf" className="btn">Download Currículo em Português</a>
        <a href="public/curriculum-english.pdf" download="Resume Filipe Bacof.pdf" className="btn">Download Currículo em Inglês</a>
    </aside>
  )
}

export default Sidebar