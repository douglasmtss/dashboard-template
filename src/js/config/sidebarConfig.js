/**
 * Sidebar configuration, such as image, title, and navigation items.
 * Each item can have a value, a click function, and an optional dropdown.
 */
const sidebarConfig = {
    img: '/public/static/logo_premio/premio_sem_data_e_background/2.png',
    title: 'Navegação',
    items: [
        {
            value: 'Número de votos',
            href: '#votos',
            isHeader: true,
            onclick: () => {
                console.log('Número de votos clicado')
                window.location.hash = '#votos'
            },
        },
        {
            value: 'Personalidades',
            href: '#personalidades',
            isHeader: true,
            onclick: () => {
                console.log('Número de votos clicado')
                window.location.hash = '#votos'
            },
            dropdown: [
                {
                    value: 'Casal da Pintura MBPM',
                    title: 'ABRAPP & MBPM',
                    href: '#personalidades-casal',
                    onclick: () => {
                        console.log('Casal da Pintura MBPM clicado')
                        window.location.hash = '#personalidades-casal'
                    },
                },
                {
                    value: 'Líder Feminina Destaque MBPM',
                    onclick: () => {
                        console.log('Líder Feminina Destaque MBPM clicado')
                        window.location.hash = '#lider-feminina-destaque-mbpm'
                    },
                },
            ],
        },
        {
            value: 'Varejo',
            href: '#varejo',
            isHeader: true,
            onclick: () => {
                console.log('Varejo clicado')
                window.location.hash = '#varejo'
            },
            dropdown: [
                {
                    value: 'Revendas / Lojistas',
                    title: null,
                    href: '#varejo-revendas',
                    onclick: () => {
                        console.log('Revendas clicado')
                        window.location.hash = '#varejo-revendas'
                    },
                },
            ],
        },
        {
            value: 'Indústria',
            href: '#industria',
            isHeader: true,
            onclick: () => {
                // console.log('Indústria clicado');
                // window.location.hash = '#industria';
            },
            dropdown: [
                {
                    value: 'Acessórios Ferramentas e Abrasivos',
                    title: null,
                    href: '#industria-acessorios',
                    isHeader: true,
                    onclick: () => {
                        console.log('Acessórios Ferramentas e Abrasivos clicado')
                        // window.location.hash = '#industria-acessorios';
                    },
                    dropdown: [
                        {
                            value: 'Equipamentos de Pintura Preparação',
                            title: null,
                            href: '#industria-acessorios',
                            onclick: () => {
                                console.log('Equipamentos de Pintura Preparação clicado')
                                // window.location.hash = '#industria-acessorios';
                            },
                        },
                        {
                            value: 'Equipamentos de Pintura Acabamento',
                            title: null,
                            href: '#industria-acessorios',
                            onclick: () => {
                                console.log('Equipamentos de Pintura Acabamento clicado')
                                // window.location.hash = '#industria-acessorios';
                            },
                        },
                        {
                            value: 'Fita Adesiva',
                            title: null,
                            href: '#industria-acessorios',
                            onclick: () => {
                                console.log('Fita Adesiva clicado')
                                // window.location.hash = '#industria-acessorios';
                            },
                        },
                        {
                            value: 'Lixa e Abrasivo',
                            title: null,
                            href: '#industria-acessorios',
                            onclick: () => {
                                console.log('Lixa e Abrasivo clicado')
                                // window.location.hash = '#industria-acessorios';
                            },
                        },
                        {
                            value: 'Proteção de acabamento',
                            title: null,
                            href: '#industria-acessorios',
                            onclick: () => {
                                console.log('Proteção de acabamento clicado')
                                // window.location.hash = '#industria-acessorios';
                            },
                        },
                        {
                            value: 'Acessórios de Pintura',
                            title: null,
                            href: '#industria-acessorios',
                            onclick: () => {
                                console.log('Acessórios de Pintura clicado')
                                // window.location.hash = '#industria-acessorios';
                            },
                        },
                    ],
                },
            ],
        },
    ],
}

sidebarConfig.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            href: PropTypes.string,
            onclick: PropTypes.func,
            dropdown: PropTypes.arrayOf(
                PropTypes.shape({
                    value: PropTypes.string,
                    title: PropTypes.string,
                    href: PropTypes.string,
                    onclick: PropTypes.func,
                    dropdown: PropTypes.arrayOf(
                        PropTypes.shape({
                            value: PropTypes.string,
                            title: PropTypes.string,
                            href: PropTypes.string,
                            onclick: PropTypes.func,
                        }),
                    ),
                }),
            ),
        }),
    ),
}

export { sidebarConfig }
