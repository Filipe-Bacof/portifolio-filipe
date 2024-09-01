import SocialNetworks from './SocialNetworks';

import Avatar from '../img/ProfilePic.jpg';

import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';
import { FaGithub } from 'react-icons/fa';
import { TbFileCertificate } from 'react-icons/tb'
import { FiDownload } from 'react-icons/fi'
import { RiNavigationLine } from 'react-icons/ri';

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} alt="Foto de Perfil Filipe Bacof" />
        <p className="title">Desenvolvedor Full-Stack</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="https://github.com/Filipe-Bacof/portifolio-filipe/raw/master/public/curriculo-filipe-bacof.pdf" target="_blank" className="btn"><FiDownload />&nbsp;&nbsp;Baixe meu Currículo (Português)</a>
        <a href="https://github.com/Filipe-Bacof/portifolio-filipe/raw/master/public/resume-filipe-bacof.pdf" target="_blank" className="btn"><FiDownload />&nbsp;&nbsp;Baixe meu Currículo (Inglês)</a>
        <a href="https://portfolio-filipe-bacof.vercel.app" target="_blank" className="btn"><RiNavigationLine />&nbsp;&nbsp;Ver Portfólio Novo</a>
        <a href="https://www.linkedin.com/in/filipe-bacof/details/certifications/" target="_blank" className="btn"><TbFileCertificate />&nbsp;&nbsp;Ver Meus Certificados</a>
        <a href="https://github.com/Filipe-Bacof/portifolio-filipe" target="_blank" className="btn"><FaGithub />&nbsp;&nbsp;Ver Repositório do Portfólio</a>
    </aside>
  )
}

export default Sidebar