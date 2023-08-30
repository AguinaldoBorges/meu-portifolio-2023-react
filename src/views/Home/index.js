import React, { useState } from 'react';
import './style.css';
import Layout2Colunas from '../../components/Layout2Colunas'
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import ImagemProjeto from '../../components/ImagemProjeto';
import Projetos from '../../database/index'
import Carrossel from '../../components/Carrossel';
import BotaoVoltarAoTopo from '../../components/BotaoVoltarAoTopo';
import ProjetoTexto from '../../components/ProjetoTexto';

import javascript from '../../assets/skills/skill-1.png'
import html from '../../assets/skills/skill-2.png'
import sass from '../../assets/skills/skill-3.png'
import bootstrap from '../../assets/skills/skill-4.png'
import vue from '../../assets/skills/skill-5.png'
import angular from '../../assets/skills/skill-6.png'
import react from '../../assets/skills/skill-7.png'
import typescript from '../../assets/skills/skill-8.png'
import api from '../../assets/skills/skill-9.png'
import sql from '../../assets/skills/skill-10.png'
import mysql from '../../assets/skills/skill-11.png'
import php from '../../assets/skills/skill-12.png'
import wordpress from '../../assets/skills/skill-13.png'
import git from '../../assets/skills/skill-14.png'

function Home() {

    const menu = [
        {
            label: 'Home',
            url: '#home',
            target: ''
        },
        {
            label: 'Skils',
            url: '#skills',
            target: ''
        },
        {
            label: 'Projetos',
            url: '#projetos',
            target: ''
        },
        {
            label: 'Linkedin',
            url: 'https://www.linkedin.com/in/aguinaldo-borges-dev',
            target: '_blank'
        },
        {
            label: 'GitHub',
            url: 'https://github.com/AguinaldoBorges',
            target: '_blank'
        }

    ]

    const skills = [
        {
            nome: "Javascript",
            url: javascript,
            descricao: "Linguagem de programação amplamente utilizada para desenvolvimento web interativo.",
        },
        {
            nome: "HTML",
            url: html,
            descricao: "Linguagem de marcação fundamental para estruturar conteúdo em páginas web.",
        },
        {
            nome: "SASS - Super Css",
            url: sass,
            descricao: "Pré-processador CSS que oferece recursos avançados e organização de estilos.",
        },
        {
            nome: "Bootstrap",
            url: bootstrap,
            descricao: "Framework CSS que agiliza o desenvolvimento de interfaces responsivas e estilizadas.",
        },
        {
            nome: "vue.js",
            url: vue,
            descricao: "Framework progressivo para construção de interfaces de usuário interativas.",
        },
        {
            nome: "Angular",
            url: angular,
            descricao: "Plataforma de desenvolvimento para construir aplicações web complexas e dinâmicas.",
        },
        {
            nome: "React",
            url: react,
            descricao: "Biblioteca JavaScript para construção de interfaces de usuário reativas e eficientes.",
        },
        {
            nome: "Typescript",
            url: typescript,
            descricao: "Superset do JavaScript que adiciona tipagem estática e outros recursos.",
        },
        {
            nome: "API",
            url: api,
            descricao: "Interface que permite a comunicação entre diferentes sistemas e aplicações.",
        },
        {
            nome: "SQL",
            url: sql,
            descricao: "Linguagem de consulta estruturada usada para gerenciar dados em bancos de dados.",
        },
        {
            nome: "MySQL",
            url: mysql,
            descricao: "Sistema de gerenciamento de banco de dados relacional de código aberto.",
        },
        {
            nome: "PHP",
            url: php,
            descricao: "Linguagem de script do lado do servidor para desenvolvimento web dinâmico.",
        },
        {
            nome: "Wordpress",
            url: wordpress,
            descricao: "Plataforma de gerenciamento de conteúdo amplamente usada para criação de sites.",
        },
        {
            nome: "Git/Github - Versionamento",
            url: git,
            descricao: "Sistema de controle de versão amplamente utilizado para colaboração em projetos.",
        },
    ];

    const skillsImanges = skills.map(skill => {
        return skill.url;
    });

    const skillsNomeEDescricao = (nome, descricao) => {
        setMensagemSkill(nome)
        setSkillDescricao(descricao)
    }

    const redesSociais = [
        {
            nome: 'Youtube',
            icon: '',
            url: ''
        },
        {
            nome: 'Instagram',
            icon: '',
            url: ''
        },
        {
            nome: 'Linkedin',
            icon: '',
            url: ''
        },
    ]
    console.log(redesSociais[0].nome);

    const [pesquisarProjeto, setPesquisarProjeto] = useState('')
    let projetosFiltrados = Projetos.filter((item) => { return item.technologies.toLowerCase().includes(pesquisarProjeto.toLowerCase()) })

    let contadorDeProjetos = 0

    const [mensagemSkill, setMensagemSkill] = useState('Toque na skill')

    const [skillDescricao, setSkillDescricao] = useState('Você verá uma breve descrição')

    return (
        <div className='container-fluid'>
            <header id='menu'>
                <Menu links={menu} />
                <BotaoVoltarAoTopo />
            </header>

            <section id='home'>
                <div id='home-imagem'>
                    <Layout2Colunas conteudoEsquerda={
                        <div id='home-texto' className='template-texto p-2 pt-4'>
                            <div className='container-fluid p-0 m-0'>
                                <div className='row p-0 m-0'>
                                    <div className='col col-lg-6 col-md-6 col-12'>
                                        <h2 className='text-bg-warning p-2'>Aguinaldo Borges</h2>
                                    </div>
                                    <div className='col col-12'>
                                        <h1 >
                                            Desenvolvedor Full-Stack
                                        </h1>
                                    </div>
                                    <div className='col  col-12'>
                                        <h3>
                                            Front-end|Back-end
                                        </h3>
                                    </div>
                                    <div className='col  col-12 pt-4'>
                                        <p>
                                            Olá e bem-vindo ao meu mundo digital! Meu nome é Aguinaldo, e sou um apaixonado Desenvolvedor de Software Web. Quando não estou mergulhando nas linhas de código, sou um marido dedicado e um tecladista entusiasta nas horas vagas. Prepare-se para uma jornada através do meu universo de criação e inovação, pois você está prestes a explorar meu portfólio.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    } />
                </div>
            </section>

            <section id='skills' className='container-fluid pt-5'>
                <h1 className='title-skills'>Skills</h1>
                <div className='row d-flex justify-content-center'>
                    <div className='col col-12'>
                        <Carrossel imagens={skillsImanges} />
                    </div>
                </div>

            </section>
            <section className='row pb-5 mb-5' id='skills-icons'>
                <div className='p-1'>
                    <span class="badge text-bg-warning"><h3>{mensagemSkill}</h3></span>
                    <p className='mt-3'>
                        <strong>{skillDescricao}</strong>
                    </p>
                </div>
                <div className='col col-12' id='skills-imanges'>
                    {
                        skills.map((item) => {
                            return <>

                                <img src={item.url} alt="imagem da skill" id='imagem-da-skill' onMouseMove={() => skillsNomeEDescricao(item.nome, item.descricao)} onMouseOut={() => skillsNomeEDescricao('Toque na skill', 'Você verá uma breve descrição')} />
                            </>
                        })
                    }
                </div>
            </section>

            <section id='projetos' className='pt-5'>
                <h1 className='title' >Projetos</h1>
                <div className='container-fluid'>
                    <h3 className='sub-title'>Filtre os Projetos por tecnologia:</h3>
                    <div className='row d-flex justify-content-center bg-warning'>
                        <div className='col col-lg-4 col-md-5 col-12 d-flex'>
                            <select value={pesquisarProjeto} onChange={(e) => {
                                setPesquisarProjeto(e.target.value)
                            }} className='form-control text-center m-3'>
                                <option value="">Selecione uma tecnologia</option>
                                {skills.map((skill, index) => (
                                    <option key={index} value={skill.nome}>
                                        {skill.nome}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='p-3'>
                        {pesquisarProjeto ? <h3 className='text-warning bg-dark p-3'>{pesquisarProjeto}</h3> : <h3 className='text-warning bg-dark p-3'>Todos os Projetos</h3>}
                    </div>
                </div>
                {
                    projetosFiltrados.map((projeto) => {
                        contadorDeProjetos < 3 ? contadorDeProjetos++ : contadorDeProjetos = 1
                        return contadorDeProjetos === 1 ? <div id='layout-2-colunas-esquerda'>
                            <div className='projetos-container'>
                                <Layout2Colunas
                                    conteudoEsquerda={
                                        <ImagemProjeto url={projeto.imageSrc} />
                                    }
                                    conteudoDireita={
                                        <ProjetoTexto projeto={projeto} />
                                    }
                                />
                            </div>
                        </div>
                            :
                            contadorDeProjetos === 2 ?
                                <div id='layout-2-colunas-neutro'>
                                    <div className='projetos-container'>
                                        <Layout2Colunas
                                            conteudoEsquerda={
                                                <ProjetoTexto projeto={projeto} />
                                            }
                                            conteudoDireita={
                                                <ImagemProjeto url={projeto.imageSrc} />
                                            }
                                        />
                                    </div>
                                </div>
                                :
                                <div id='layout-2-colunas-direita'>
                                    <div className='projetos-container'>
                                        <Layout2Colunas
                                            conteudoEsquerda={
                                                <ImagemProjeto url={projeto.imageSrc} />
                                            }
                                            conteudoDireita={
                                                <ProjetoTexto projeto={projeto} />
                                            }
                                        />
                                    </div>
                                </div>
                    })
                }
            </section>

            <footer id='rodape' className="bg-dark text-white py-5">
                <Rodape
                    tituloEsquerda={'Aguinaldo Borges'}
                    textoEsquerda={'Desenvolvedor Full-Stack - Front-End | Back-End'}
                    tituloCentro={'Links Úteis'}
                    linksCentro={menu}
                    tituloDireita={'Faça contato'}
                    textoDireita={'Me deixe dar vida à sua próxima ideia na web!'}
                    copyright={'Aguinaldo Borges. Todos os direitos reservados.'}
                />
            </footer>
        </div>
    );
}

export default Home;
