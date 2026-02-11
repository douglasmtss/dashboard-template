/**
 * Sidebar configuration, such as image, title, and navigation items.
 * Each item can have a value, a click function, and an optional dropdown.
 */
const sidebarConfig = {
    img: '/static/logo_premio/premio_sem_data_e_background/2.png',
    title: 'Navegação',
    items: [
        {
            value: 'Número de votos',
            href: '#votos',
            onclick: () => {
                console.log('Número de votos clicado');
                window.location.hash = '#votos';
            }
        },
        {
            value: 'Personalidades',
            href: '#personalidades',
            onclick: () => {
                console.log('Número de votos clicado');
                window.location.hash = '#votos';
            },
            dropdown: [
                {
                    value: 'Casal da Pintura MBPM',
                    title: 'ABRAPP & MBPM',
                    href: '#personalidades-casal',
                    onclick: () => {
                        console.log('Casal da Pintura MBPM clicado');
                        window.location.hash = '#personalidades-casal';
                    }
                },
                {
                    value: 'Líder Feminina Destaque MBPM',
                    onclick: () => {
                        console.log('Líder Feminina Destaque MBPM clicado');
                        window.location.hash = '#lider-feminina-destaque-mbpm';
                    }
                },
            ],
        },
        {
            value: 'Varejo',
            href: '#varejo',
            onclick: () => {
                console.log('Varejo clicado');
                window.location.hash = '#varejo';
            },
            dropdown: [
                {
                    value: 'Revendas / Lojistas',
                    title: null,
                    href: '#varejo-revendas',
                    onclick: () => {
                        console.log('Revendas clicado');
                        window.location.hash = '#varejo-revendas';
                    }
                }
            ],
        }
    ]
};

sidebarConfig.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        href: PropTypes.string,
        onclick: PropTypes.func,
        dropdown: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.string,
            title: PropTypes.string,
            href: PropTypes.string,
            onclick: PropTypes.func,
        }))
    }))
};

export { sidebarConfig };