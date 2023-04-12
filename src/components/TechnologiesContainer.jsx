import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiMongodb,
} from 'react-icons/di'

import {
    SiTypescript,
    SiNextdotjs,
    SiJest,
} from 'react-icons/si'

import '../styles/components/technologiescontainer.sass'

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, text: "Linguagem de marcação utilizada na construção de páginas na Web." },
    { id: "css", name: "CSS3", icon: <DiCss3 />, text: "Mecanismo para adicionar estilização aos elementos de uma página web." },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, text: "Linguagem de programação interpretada estruturada, de alto nível, com tipagem dinâmica e multiparadigma." },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, text: "Software multiplataforma baseado no interpretador V8 do Google, permite a execução de códigos JavaScript fora de um navegador web." },
    { id: "mysql", name: "MySQL", icon: <DiMysql />, text: "Sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface." },
    { id: "react", name: "React.js", icon: <DiReact />, text: "Framework de JavaScript com foco em criar interfaces de usuário em páginas web, criado e mantido pelo Facebook (atual Meta)." },
    { id: "mongodb", name: "MongoDB", icon: <DiMongodb />, text: "Banco de dados não-relacional orientado a documentos, classificado como um programa de banco de dados NoSQL." },
    { id: "typescript", name: "TypeScript", icon: <SiTypescript />, text: "Superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem." },
    // { id: "nextjs", name: "Next.js", icon: <SiNextdotjs />, text: "Next.js é um framework React com foco em produção e eficiência criado e mantido pela equipe da Vercel." },
    // { id: "jest", name: "Jest", icon: <SiJest />, text: "Framework de teste unitário de código aberto em JavaScript criado pelo Facebook a partir do framework Jasmine." },
]

const TechnologiesContainer = () => {
  return (
    <section className='technologies-container'>
        <h2>Tecnologias que mais utilizo</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.name}</h3>
                        <p>{tech.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default TechnologiesContainer