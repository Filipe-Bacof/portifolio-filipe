import { AiOutlineWhatsApp, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'
import { FaGraduationCap } from 'react-icons/fa'

import '../styles/components/informationcontainer.sass';

const InformationContainer = () => {
  return (
    <section id="information">
        <div className="info-card">
            <AiOutlineWhatsApp id="phone-icon"/>
            <div>
                <h3>Telefone</h3>
                <p>(51) 99445-6865</p>
            </div>
        </div>
        <div className="info-card">
            <AiOutlineMail id="email-icon"/>
            <div>
                <h3>E-Mail</h3>
                <p>filipebacof@gmail.com</p>
            </div>
        </div>
        <div className="info-card">
            <AiFillEnvironment id="pin-icon"/>
            <div>
                <h3>Localização</h3>
                <p>Sapucaia do Sul - RS</p>
            </div>
        </div>
        <div className="info-card last-one">
            <FaGraduationCap id="graduation-icon"/>
            <div>
                <h3>Formação Acadêmica</h3>
                <p>Unicesumar EAD</p>
                <p>Engenharia de Software</p>
            </div>
        </div>
    </section>
  )
}

export default InformationContainer