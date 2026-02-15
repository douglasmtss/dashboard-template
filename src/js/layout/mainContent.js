// mainContent.js
import { renderVotosChart } from '../../charts/votosChart.js';

export function renderMainContent(container) {
  const hash = window.location.hash || '#votos';
  $(container).empty();
  if (hash === '#votos') {
    $(container).html(`
      <section class="p-3">
        <h2>Número de Votos</h2>
        <div id="votos-chart" style="height:400px;"></div>
      </section>
    `);
    renderVotosChart('votos-chart');
  } else if (hash === '#personalidades') {
    $(container).html(`
      <section class="p-3">
        <h2>Personalidades</h2>
        <ul class="list-group mb-3">
          <li class="list-group-item"><a href="#personalidades-casal">Casal da Pintura MBPM</a></li>
          <li class="list-group-item"><a href="#personalidades-feminina">Líder Feminina Destaque MBPM</a></li>
          <li class="list-group-item"><a href="#personalidades-masculina">Líder Masculino Destaque MBPM</a></li>
          <li class="list-group-item"><a href="#personalidades-profissional">Pintor(a) Profissional MBPM</a></li>
        </ul>
        <div id="personalidades-content"></div>
      </section>
    `);
    renderPersonalidadesContent();
  } else if (hash.startsWith('#personalidades-')) {
    renderPersonalidadesContent(container);
  } else if (hash === '#varejo') {
    $(container).html(`
      <section class="p-3">
        <h2>Varejo</h2>
        <ul class="list-group mb-3">
          <li class="list-group-item"><a href="#varejo-revendas">Revendas / Lojistas</a></li>
        </ul>
        <div id="varejo-content"></div>
      </section>
    `);
    renderVarejoContent();
  } else if (hash.startsWith('#varejo-')) {
    renderVarejoContent(container);
  } else if (hash === '#industria') {
    $(container).html(`
      <section class="p-3">
        <h2>Indústria</h2>
        <ul class="list-group mb-3">
          <li class="list-group-item"><a href="#industria-equipamento">Equipamento de Pintura</a></li>
          <li class="list-group-item"><a href="#industria-madeira">Indústria Madeira</a></li>
        </ul>
        <div id="industria-content"></div>
      </section>
    `);
    renderIndustriaContent();
  } else if (hash.startsWith('#industria-')) {
    renderIndustriaContent(container);
  } else if (hash === '#abrafati') {
    $(container).html(`
      <section class="p-3">
        <h2>PQS - ABRAFATI</h2>
        <ul class="list-group mb-3">
          <li class="list-group-item"><a href="#abrafati-nacional">Nacional</a></li>
          <li class="list-group-item"><a href="#abrafati-regional">Regional</a></li>
        </ul>
        <div id="abrafati-content"></div>
      </section>
    `);
    renderAbrafatiContent();
  } else if (hash.startsWith('#abrafati-')) {
    renderAbrafatiContent(container);
  } else {
    $(container).html(`<section class="p-3"><h2>Em breve...</h2></section>`);
  }
}

function renderPersonalidadesContent(container) {
  const hash = window.location.hash;
  let html = '';
  if (hash === '#personalidades-casal') {
    html = `<h3>Casal da Pintura MBPM</h3><p>Conteúdo do Casal da Pintura MBPM.</p>`;
  } else if (hash === '#personalidades-feminina') {
    html = `<h3>Líder Feminina Destaque MBPM</h3><p>Conteúdo da Líder Feminina Destaque MBPM.</p>`;
  } else if (hash === '#personalidades-masculina') {
    html = `<h3>Líder Masculino Destaque MBPM</h3><p>Conteúdo do Líder Masculino Destaque MBPM.</p>`;
  } else if (hash === '#personalidades-profissional') {
    html = `<h3>Pintor(a) Profissional MBPM</h3><p>Conteúdo do Pintor(a) Profissional MBPM.</p>`;
  }
  if (container) {
    $(container).html(`<section class="p-3">${html}</section>`);
  } else {
    $('#personalidades-content').html(html);
  }
}

function renderVarejoContent(container) {
  const hash = window.location.hash;
  let html = '';
  if (hash === '#varejo-revendas') {
    html = `<h3>Revendas / Lojistas</h3><p>Conteúdo de Revendas / Lojistas.</p>`;
  }
  if (container) {
    $(container).html(`<section class="p-3">${html}</section>`);
  } else {
    $('#varejo-content').html(html);
  }
}

function renderIndustriaContent(container) {
  const hash = window.location.hash;
  let html = '';
  if (hash === '#industria-equipamento') {
    html = `<h3>Equipamento de Pintura</h3><p>Conteúdo de Equipamento de Pintura.</p>`;
  } else if (hash === '#industria-madeira') {
    html = `<h3>Indústria Madeira</h3><p>Conteúdo de Indústria Madeira.</p>`;
  }
  if (container) {
    $(container).html(`<section class="p-3">${html}</section>`);
  } else {
    $('#industria-content').html(html);
  }
}

function renderAbrafatiContent(container) {
  const hash = window.location.hash;
  let html = '';
  if (hash === '#abrafati-nacional') {
    html = `<h3>Nacional</h3><p>Conteúdo Nacional PQS - ABRAFATI.</p>`;
  } else if (hash === '#abrafati-regional') {
    html = `<h3>Regional</h3><p>Conteúdo Regional PQS - ABRAFATI.</p>`;
  }
  if (container) {
    $(container).html(`<section class="p-3">${html}</section>`);
  } else {
    $('#abrafati-content').html(html);
  }
}
