# Dashboard

Template de dashboard com suporte a hot reload para desenvolvimento.

---

## 🚨 ESLint/Prettier não está funcionando no VSCode?

**➡️ Siga o guia rápido: [QUICK_FIX.md](QUICK_FIX.md)**

Ou execute o script automático:
```bash
./setup-lint.sh
```

---

## ⚙️ Requisitos

- **Node.js >= 18.18.0** (recomendado: 22.x LTS)
- **Yarn** ou **npm**

### Trocar Versão do Node (se necessário)

```bash
# Usar a versão definida no .nvmrc
nvm use

# Verificar
node --version  # deve mostrar v22.19.0 ou superior
```

> ⚠️ **Se o ESLint não estiver funcionando no VSCode**, veja [NODE_UPGRADE.md](NODE_UPGRADE.md)

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

## � Linting e Formatação

### Verificar código

Para verificar se há problemas no código:

```bash
yarn lint
# ou
npm run lint
```

### Corrigir automaticamente

Para corrigir automaticamente problemas de linting:

```bash
yarn lint:fix
# ou
npm run lint:fix
```

### Formatar código

Para formatar o código com Prettier:

```bash
yarn format
# ou
npm run format
```

### Verificar formatação

Para apenas verificar se o código está formatado corretamente:

```bash
yarn format:check
# ou
npm run format:check
```

### Verificação completa

Para executar lint e verificação de formatação:

```bash
yarn check
# ou
npm run check
```

## 🛠️ Tecnologias

- **Browser Sync** - Servidor de desenvolvimento com hot reload
- **Bootstrap 5** - Framework CSS
- **ECharts** - Biblioteca de gráficos
- **jQuery** - Manipulação DOM
- **ESLint + Prettier** - Linting e formatação de código

