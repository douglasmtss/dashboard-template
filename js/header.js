// header.js
export function renderHeader(container) {
  container.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-3">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="https://www.pintorabrapp.com.br/favicon.ico" alt="Logo" width="32" height="32" class="d-inline-block align-text-top">
          Prêmio Pintor ABRAPP Jornal do Pintor
        </a>
      </div>
    </nav>
  `;
}
