# Dashboard

Template de dashboard com suporte a hot reload para desenvolvimento.

## 🚀 Desenvolvimento

### Instalação

```bash
yarn install
# ou
npm install
```

### Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento com hot reload:

```bash
yarn start
# ou
npm start
```

O browser-sync irá:
- Abrir automaticamente o navegador em `http://localhost:3000`
- Monitorar mudanças em todos os arquivos CSS, JS, HTML, imagens e fonts
- Recarregar automaticamente o navegador quando detectar alterações
- Sincronizar ações (cliques, scroll, formulários) entre múltiplas janelas

#### Modo Silencioso

Para iniciar sem abrir o navegador automaticamente:

```bash
yarn start:silent
# ou
npm run start:silent
```

### Interface de Controle

O painel de controle do browser-sync está disponível em `http://localhost:3001`

## 📁 Estrutura do Projeto

```
dashboard-template/
├── public/
│   ├── index.html          # Página principal
│   ├── media/              # Imagens e mídia
│   └── static/             # Arquivos estáticos
├── src/
│   ├── charts/             # Gráficos (ECharts)
│   ├── css/                # Estilos CSS
│   │   ├── global.css
│   │   ├── reset.css
│   │   └── component/      # Estilos de componentes
│   └── js/                 # JavaScript modular
│       ├── app.js          # Entry point
│       ├── component/      # Componentes
│       ├── config/         # Configurações
│       ├── layout/         # Layouts (header, footer, sidebar)
│       ├── type/           # Tipos
│       └── util/           # Utilitários
└── bs-config.js            # Configuração do browser-sync
```

## 🛠️ Tecnologias

- **Browser Sync** - Servidor de desenvolvimento com hot reload
- **Bootstrap 5** - Framework CSS
- **ECharts** - Biblioteca de gráficos
- **jQuery** - Manipulação DOM
- **ESLint + Prettier** - Linting e formatação de código

