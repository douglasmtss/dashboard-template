# Guia de Estilo e Configuração ESLint

Este documento explica as configurações do ESLint e convenções de código do projeto.

## 📋 Índice

- [Configuração do ESLint](#configuração-do-eslint)
- [Regras de Código](#regras-de-código)
- [Convenções de Estilo](#convenções-de-estilo)
- [Boas Práticas](#boas-práticas)
- [Integração com Prettier](#integração-com-prettier)

## ⚙️ Configuração do ESLint

O projeto usa **ESLint Flat Config** (9.x+), a nova forma recomendada de configuração.

### Arquivos Monitorados

- `src/**/*.js` - Todo código JavaScript
- `*.config.js` - Arquivos de configuração

### Arquivos Ignorados

- `node_modules/`
- `dist/`, `build/`, `coverage/`
- `**/*.min.js` - Arquivos minificados
- `public/media/`, `public/static/` - Assets binários

### Ambiente

- **ECMAScript**: ES2024
- **Módulos**: ESM (import/export)
- **Browser**: Compatível com APIs do navegador
- **Globais**: jQuery ($), ECharts, PropTypes, Bootstrap

## 📝 Regras de Código

### Variáveis

✅ **Usar `const` por padrão**
```javascript
// ✅ Bom
const maxItems = 10;

// ❌ Evitar
let maxItems = 10; // se não for reatribuído
```

✅ **Usar `let` para valores que mudam**
```javascript
// ✅ Bom
let count = 0;
count++;

// ❌ Evitar
var count = 0; // var não é permitido
```

✅ **Nomes descritivos**
```javascript
// ✅ Bom
const userList = getUsers();

// ❌ Evitar
const ul = getUsers();
```

### Funções

✅ **Usar arrow functions quando possível**
```javascript
// ✅ Bom
const sum = (a, b) => a + b;
const processItems = items => items.map(item => item.id);

// ✅ Também aceitável (quando precisa do 'this')
function MyClass() {
  this.items = [];
}
```

✅ **JSDoc para funções exportadas**
```javascript
/**
 * Renderiza a sidebar na página
 * @param {jQuery} $container - Container onde a sidebar será renderizada
 * @param {import('../type/types.js').SidebarConfigPropTypes} sidebarConfig - Configuração
 */
export function renderSidebar($container, sidebarConfig) {
  // ...
}
```

### Comparações

✅ **Usar `===` e `!==`**
```javascript
// ✅ Bom
if (value === 10) { }
if (name !== '') { }

// ❌ Evitar
if (value == 10) { }
if (name != '') { }

// ✅ Exceção: comparação com null
if (value == null) { } // aceito (verifica null e undefined)
```

### Import/Export

✅ **Usar imports nomeados**
```javascript
// ✅ Bom
import { renderSidebar, renderHeader } from './layout';

// ✅ Também bom para default exports
import App from './app';
```

✅ **Evitar imports duplicados**
```javascript
// ❌ Evitar
import { foo } from './module';
import { bar } from './module';

// ✅ Bom
import { foo, bar } from './module';
```

### Console

⚠️ **`console.log` gera warning**
```javascript
// ⚠️ Warning (remover em produção)
console.log('debug info');

// ✅ Permitido
console.error('Erro ao carregar dados');
console.warn('Aviso: dados incompletos');
console.info('Informação importante');
```

## 🎨 Convenções de Estilo

### Indentação

- **2 espaços** (não tabs)
- **Switch cases** indentados

```javascript
switch (type) {
  case 'user':
    handleUser();
    break;
  case 'admin':
    handleAdmin();
    break;
}
```

### Aspas

- **Single quotes** (`'`) para strings
- **Template literals** para interpolação

```javascript
// ✅ Bom
const name = 'João';
const greeting = `Olá, ${name}!`;

// ❌ Evitar
const name = "João"; // double quotes desnecessárias
const greeting = 'Olá, ' + name + '!'; // concatenação
```

### Ponto e vírgula

- **Não usar ponto e vírgula** (conforme configuração do Prettier)

```javascript
// ✅ Bom
const items = [1, 2, 3]
export function render() {
  return '<div></div>'
}

// ❌ Evitar
const items = [1, 2, 3];
```

### Espaçamento

✅ **Espaços ao redor de operadores**
```javascript
// ✅ Bom
const sum = a + b
const result = value > 10 ? 'high' : 'low'

// ❌ Evitar
const sum = a+b
```

✅ **Espaço após keywords**
```javascript
// ✅ Bom
if (condition) { }
for (let i = 0; i < 10; i++) { }

// ❌ Evitar
if(condition){ }
```

✅ **Espaço em objetos**
```javascript
// ✅ Bom
const user = { name: 'João', age: 25 }

// ❌ Evitar
const user = {name:'João',age:25}
```

### Vírgulas finais (Trailing Commas)

✅ **Usar em arrays e objetos multilinhas**
```javascript
// ✅ Bom
const items = [
  'item1',
  'item2',
  'item3', // trailing comma
]

const config = {
  name: 'Dashboard',
  version: '1.0',
  features: ['charts', 'tables'], // trailing comma
}

// ❌ Evitar em single-line
const arr = [1, 2, 3,]
```

### Chaves (Braces)

✅ **Sempre usar chaves**
```javascript
// ✅ Bom
if (condition) {
  doSomething()
}

// ❌ Evitar (mas permitido em single-line)
if (condition) doSomething()

// ✅ Aceitável para expressões curtas
if (error) return null
```

## ✨ Boas Práticas

### 1. Destructuring

```javascript
// ✅ Bom - usar destructuring
const { name, age } = user
const [first, second] = items

// ❌ Evitar
const name = user.name
const age = user.age
```

### 2. Template Literals

```javascript
// ✅ Bom
const html = `
  <div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
  </div>
`

// ❌ Evitar
const html = '<div class="card">' +
  '<h2>' + title + '</h2>' +
  '<p>' + description + '</p>' +
  '</div>'
```

### 3. Default Parameters

```javascript
// ✅ Bom
function generateId(prefix = 'id') {
  return `${prefix}-${Math.random()}`
}

// ❌ Evitar
function generateId(prefix) {
  prefix = prefix || 'id'
  return prefix + '-' + Math.random()
}
```

### 4. Spread Operator

```javascript
// ✅ Bom
const newArray = [...oldArray, newItem]
const newObject = { ...oldObject, newProp: 'value' }

// ❌ Evitar
const newArray = oldArray.concat([newItem])
const newObject = Object.assign({}, oldObject, { newProp: 'value' })
```

### 5. Object Shorthand

```javascript
// ✅ Bom
const name = 'João'
const age = 25
const user = { name, age }

// ❌ Evitar
const user = { name: name, age: age }
```

### 6. Evitar Avaliação Dinâmica

```javascript
// ❌ NUNCA usar
eval('código malicioso')
new Function('return código')
setTimeout('alert("não")', 1000)

// ✅ Sempre usar
setTimeout(() => alert('sim'), 1000)
```

## 🔄 Integração com Prettier

O projeto usa **Prettier** para formatação automática de código. O ESLint apenas valida regras que não conflitam com o Prettier.

### Configuração do Prettier (`.prettierrc`)

```json
{
  "singleQuote": true,
  "semi": false,
  "tabWidth": 2,
  "printWidth": 80,
  "trailingComma": "all",
  "arrowParens": "avoid"
}
```

### Workflow Recomendado

1. **Escreva o código** normalmente
2. **Salve o arquivo** (VSCode formata automaticamente com Prettier)
3. **Execute o lint** antes de fazer commit:
   ```bash
   yarn lint:fix
   ```

### Comandos Úteis

```bash
# Verificar problemas de linting
yarn lint

# Corrigir automaticamente
yarn lint:fix

# Formatar código
yarn format

# Verificar formatação
yarn format:check

# Verificação completa
yarn check
```

## 🔧 Configuração do VSCode

O arquivo `.vscode/settings.json` já está configurado para:

- ✅ Formatar automaticamente ao salvar
- ✅ Corrigir problemas do ESLint ao salvar
- ✅ Usar Prettier como formatador padrão
- ✅ Detectar e usar a configuração flat do ESLint

## 📚 Referências

- [ESLint Documentation](https://eslint.org/docs/latest/)
- [ESLint Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files)
- [Prettier Documentation](https://prettier.io/docs/en/)
- [JavaScript Standard Style](https://standardjs.com/rules.html)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

## 🆘 Problemas Comuns

### ESLint não está funcionando

```bash
# Verificar versão do ESLint
npx eslint --version

# Limpar cache do ESLint
npx eslint --cache-location ./node_modules/.cache/eslint --clear
```

### Conflitos entre ESLint e Prettier

O projeto já está configurado para evitar conflitos, mas se ocorrer:

```bash
# Reabrir o VSCode
# Verificar extensões instaladas: ESLint e Prettier
```

### Erros de importação

Se houver erros de módulos não encontrados:

```bash
# Reinstalar dependências
rm -rf node_modules
yarn install
```
