import { FaLinkedinIn, FaGithub, FaInstagram, FaSpotify } from 'react-icons/fa'

import "../styles/components/socialnetworks.sass"

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/filipe-bacof/" },
    { name: "github", icon: <FaGithub />, link: "https://github.com/Filipe-Bacof" },
    { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/filipe.bacof/" },
    { name: "spotify", icon: <FaSpotify />, link: "https://open.spotify.com/user/8k3a5mqfxtf78erfftdjjp03e" },
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.link} target='_blank' className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks;