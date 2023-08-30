const projetos = [
    {
        title: "Este Portfólio",
        technologies: "React, CSS e Bootstrap, Git/Github - Versionamento",
        description:
            "Nesse projeto desenvolvi este portfolio usando componentes. Possui sistema de filtro para exibir os projetos de acordo com a tecnologia selecionada. Ao tocar na imagem de um projeto ela começa a se mexer, mostrando o projeto em uso. Na sessão de skills é exibida uma descrição ao selecionar cada uma. Adicionei um botão fluruante para rolar a página ao topo a qualquer momento durante a navegação. O site está responsivo, adequando-se a tablets dispositivos moveis.",
        links: [
            { label: "Código", url: "https://github.com/AguinaldoBorges/meu-portifolio-2023-react" },
            { label: "Site", url: "https://www.aguinaldoborges.com.br/" }
        ],
        imageSrc: "/projetos/projeto12.jpg"
    },
    {
        title: "Benefício da Maternidade",
        technologies: "Vue.Js, CSS e Bootstrap",
        description:
            "Nessa Landing page, separei as sessões em componentes e as páginas em views, usei recursos Css mais elaborados como posicionamentos, paralax e modais com vídeos incorporados. Criei uma página de direcionamento, onde, ao clicar no borão de CTA, o usuário é direcionado para o whatsapp do atendimento da empresa.",
        links: [
            { label: "Site", url: "https://beneficiodamaternidade.com.br/" }
        ],
        imageSrc: "/projetos/projeto1.jpg"
    },
    {
        title: "Guina Cursos - Front-End",
        technologies: "React, Css e Bootstrap, Git/Github - Versionamento",
        description:
            "Para construir o 'Guina Cursos', escolhi utilizar tecnologias modernas para o desenvolvimento web, incluindo React para criar interfaces dinâmicas e reativas, React Router Dom para gerenciar as rotas da aplicação, useState para o gerenciamento de estados nos componentes, além de utilizar o Bootstrap para estilização responsiva.",
        links: [{ label: "Código", url: "https://github.com/AguinaldoBorges/guina-cursos" }],
        imageSrc: "/projetos/projeto10.jpg"
    },
    {
        title: "Eu na Europa",
        technologies: "Angular, Css e Bootstrap",
        description:
            "Nessa landing page, cada sessão é um componente. Além de usar redirecionamento para whatsapp e menu fixo, tambem usei um acordion para descrever as vantagens na medida que o usuário clica em uma opção e carrosseis nos depoimentos, para alterá-los.",
        links: [{ label: "Site", url: "https://eunaeuropacidadania.com.br/" }],
        imageSrc: "/projetos/projeto5.jpg"
    },
    {
        title: "Poder de mãe",
        technologies: "Wordpress, Javascript, CSS e Bootstrap",
        description:
            "Neste projeto os principais desafios foram a criação e integração de uma calculadora de IMC levando em conta a idade gestacional e uma calculadora de Gravidez com base na data da última menstruação. Nessa solução tive que usar bastante lógica e Javascript.",
        links: [{ label: "Site", url: "https://poderdemae.com/" }],
        imageSrc: "/projetos/projeto2.jpg"
    },
    {
        title: "Gina Hernandez",
        technologies: "Html5, CSS3, Bootstrap, Javascript, Git/Github - Versionamento",
        description:
            "Nesse projeto usei HTML, CSS e JavaScript, juntamente com bibliotecas como Bootstrap e jQuery UI. Essas ferramentas me permitiram construir uma interface responsiva, com elementos interativos e visualmente atrativos. Explorei as funcionalidades do Javascript e implementei um sistema de eventos que atualiza a imagem principal de acordo com a seleção.Utilizei a biblioteca jQuery UI Datepicker para criar um calendário que permitisse aos usuários visualizar datas importantes. Usei o Bootstrap para criar um layout responsivo, mas ainda precisei ajustar manualmente alguns elementos para garantir uma experiência agradável em todas as telas.",
        links: [
            { label: "Código", url: "https://github.com/AguinaldoBorges/gina-hernandez-nadadora" },
            { label: "Site", url: "https://gina-hernandez-nadadora.vercel.app/" }
        ],
        imageSrc: "/projetos/projeto11.jpg"
    },
    {
        title: "SP CALC",
        technologies: "Html5, CSS3, GuinaStrap e Javascript, Git/Github - Versionamento",
        description:
            "Nesse sistema, criei um layout responsivo usando HTML e CSS. Usei suavização no scroll, tags semanticas, Javascript para criar a calculadora e lógica para previnir comportamentos do usuário durante sua execução. Também usei o GuinaStrap, que é minha própria biblioteca Css, criada para otimizar o desenvolvimento front-end. O SP CALC é um sistema desenvolvido para fins de estudos.",
        links: [
            { label: "Código", url: "https://github.com/AguinaldoBorges/Calculadora-de-vale-transporte" },
            { label: "Site", url: "https://calculadora-de-vale-transporte.vercel.app/" }
        ],
        imageSrc: "/projetos/projeto8.jpg"
    },
    {
        title: "Reciclagem",
        technologies: "Vue.Js, Css e Bootstrap, Git/Github - Versionamento",
        description:
            "Usando componentização, menu fixo e um botão de voltar ao topo para melhor experiencia do usuário, esse projeto trouxe o desafio de comunicar o tema de reciclagem de maneira lúdica. Ele foi desenvolvido como um bonus e usado na feira de ciências de acadêmicos da Faculdade Flamingo. Hoje está integrada na rede interna da faculdade, disponível para cosulta dos alunos.",
        links: [
            { label: "Código", url: "https://github.com/AguinaldoBorges/11-reciclagem2" },
            { label: "Site", url: "https://11-reciclagem-16xy.vercel.app/" }
        ],
        imageSrc: "/projetos/projeto3.jpg"
    },
    {
        title: "Buscador Patomon",
        technologies: "React, Css e Bootstrap, API, Git/Github - Versionamento",
        description:
            "O desafio aqui foi consumir uma api, criar um sistema de busca e exibir o pokemon pesquisado. Para quem joga os games, criei a área golpes, onde o usuário pode selecionar os ataques compatíveis com o pokemon escolhido para bolar suas extratégias.",
        links: [
            { label: "Código", url: "https://github.com/AguinaldoBorges/react-buscador-patomon" },
            { label: "Site", url: "https://react-buscador-patomon.vercel.app/" }
        ],
        imageSrc: "/projetos/projeto4.jpg"
    }
];

module.exports = (projetos)