import { renderButtonDropdownLink } from './component/button-dropdown-link.js';


// sidebar.js
export function renderSidebar(container) {
    const sidebarHTML = `
    <div class="p-3">
      <img src="https://www.pintorabrapp.com.br/favicon.ico" class="img-fluid mb-3" alt="Logo">
      <h5>Navegação</h5>
      <ul class="nav flex-column">
        <li class="nav-item">
            <div id="custom-dropdown-link"></div>
        </li>
      </ul>
    </div>
  `;
    container.innerHTML = sidebarHTML;
    // Renderiza botão customizado via jQuery para garantir o evento
    $('#custom-dropdown-link', container).html(
        renderButtonDropdownLink({
            value: 'Número de votos',
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
                        console.log('2024 clicado');
                        window.location.hash = '#votos-2024';
                    }
                },
                { value: 'Líder Feminina Destaque MBPM', onclick: () => { console.log('2025 clicado'); window.location.hash = '#votos-2025'; } },
            ],
        })
    );
}
