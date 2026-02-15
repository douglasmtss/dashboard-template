# 🔴 Como Ativar Erros Visuais do ESLint/Prettier no VSCode

## ✅ PASSO A PASSO GARANTIDO

### 1️⃣ Verificar que as Extensões Estão Instaladas

**Pressione:** `Ctrl + Shift + X` (abre painel de extensões)

**Procure e INSTALE estas 2 extensões:**

1. **ESLint**
   - Autor: Microsoft (dbaeumer.vscode-eslint)
   - Versão: >= 3.0.0
   - ⚠️ Se já estiver instalada, clique em "Reload" ou "Restart"

2. **Prettier - Code formatter**
   - Autor: Prettier (esbenp.prettier-vscode)
   - Versão: >= 10.0.0
   - ⚠️ Se já estiver instalada, clique em "Reload" ou "Restart"

---

### 2️⃣ Verificar que ESLint Está Habilitado

**No canto inferior direito do VSCode:**

Procure por um ícone/status que mostre:
- ✅ `ESLint: Running` ou
- ❌ `ESLint: Disabled`

**Se estiver desabilitado:**
1. Clique no ícone
2. Selecione "Enable ESLint"

OU:

1. `Ctrl + Shift + P`
2. Digite: `ESLint: Enable ESLint`
3. Enter

---

### 3️⃣ Reiniciar o Servidor ESLint

**Pressione:** `Ctrl + Shift + P`

**Digite:** `ESLint: Restart ESLint Server`

**Resultado esperado:**
- Mensagem "ESLint server stopped"
- Depois "ESLint server is running"

---

### 4️⃣ Ver os Logs do ESLint (Diagnóstico)

**Pressione:** `Ctrl + Shift + U` (abre painel Output)

**No dropdown, selecione:** `ESLint`

**Você deve ver:**
```
[Info  - HH:mm:ss] ESLint server is starting.
[Info  - HH:mm:ss] ESLint server running in node vXX.XX.X
[Info  - HH:mm:ss] ESLint server is running.
```

**❌ Se ver erros como:**
- `Failed to load config`
- `Cannot find module`
- `Node version too old`

Execute:
```bash
nvm use 22.19.0
rm -rf node_modules
yarn install
```

---

### 5️⃣ Abrir um Arquivo com Erro

**Abra o arquivo:** `src/js/app.js`

**Linha 7 tem double quotes (erro de formatação):**
```javascript
import { sidebarConfig } from "./config/sidebarConfig.js"
```

**O que você DEVE ver:**

1. **Linha amarela ondulada** embaixo de `"./config/sidebarConfig.js"`

2. **Ao passar o mouse:**
   ```
   Replace `"./config/sidebarConfig.js"` with `'./config/sidebarConfig.js'`
   eslint(prettier/prettier)
   ```

3. **No painel "Problems" (Ctrl + Shift + M):**
   ```
   ⚠  1 problem in 1 file
   src/js/app.js:7 - Replace `"./config/sidebarConfig.js"` with '...' (prettier/prettier)
   ```

4. **Lâmpada 💡 ao lado do número da linha** com ação rápida:
   - "Fix this prettier/prettier problem"
   - "Fix all auto-fixable problems"

---

### 6️⃣ Testar com Erro Intencional

**Adicione esta linha no final do arquivo app.js:**

```javascript
var teste = "teste"
```

**O que você DEVE ver:**

1. **2 linhas vermelhas/amarelas:**
   - 🔴 `var` (deve usar `let` ou `const`)
   - 🟡 `"teste"` (deve usar aspas simples)

2. **Ao passar o mouse:**
   - `Unexpected var, use let or const instead. eslint(no-var)`
   - `Replace "teste" with 'teste'. eslint(prettier/prettier)`

3. **Painel Problems mostra 3 problemas** (1 existente + 2 novos)

**Se aparecer → ✅ FUNCIONOU!**

**Remova a linha de teste após verificar.**

---

### 7️⃣ Recarregar o VSCode (se necessário)

**Pressione:** `Ctrl + Shift + P`

**Digite:** `Developer: Reload Window`

**Aguarde 10 segundos** após recarregar e abra um arquivo `.js`.

---

## 🔍 TROUBLESHOOTING

### ❌ "Nada aparece inline"

**Verifique:**

1. **Status do ESLint no canto inferior:**
   - Deve mostrar "ESLint: Running"
   - Se mostrar "ESLint: Disabled", ative

2. **Painel Output > ESLint:**
   - Deve mostrar "ESLint server is running"
   - Se mostrar erros, anote e resolva

3. **Painel Problems (Ctrl + Shift + M):**
   - Deve listar os erros do arquivo atual
   - Se estiver vazio mas o terminal mostra erros, o ESLint não está conectado

4. **Extensão ESLint:**
   - `Ctrl + Shift + X`
   - Procure "ESLint"
   - Clique em "Uninstall" e depois "Install" novamente
   - Reinicie o VSCode

---

### ❌ "Erros aparecem no terminal mas não no VSCode"

**Causa:** VSCode usando Node antigo ou ESLint não conectado.

**Solução:**

1. **Feche TODOS os terminais do VSCode** (importante!)

2. **Abra novo terminal:**
   ```bash
   nvm use 22.19.0
   node --version  # confirme v22.19.0
   ```

3. **Force restart do ESLint:**
   - `Ctrl + Shift + P`
   - `ESLint: Restart ESLint Server`

4. **Recarregue VSCode:**
   - `Ctrl + Shift + P`
   - `Developer: Reload Window`

---

### ❌ "Só funciona para alguns arquivos"

**Causa:** Arquivo não está sendo validado pelo ESLint.

**Solução:**

Verifique `.vscode/settings.json` tem:
```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact"
  ]
}
```

---

### ❌ "Extensão ESLint com erro"

**Output > ESLint mostra:**
```
Failed to load the ESLint library...
```

**Solução:**

```bash
# Limpar tudo
rm -rf node_modules .eslintcache
yarn install

# Reiniciar VSCode
# Ctrl + Shift + P > Developer: Reload Window
```

---

## 🧪 Script de Diagnóstico

Execute este comando para verificar tudo:

```bash
./fix-eslint-vscode.sh
```

Ele verifica:
- ✅ Versão do Node
- ✅ ESLint funcionando
- ✅ Extensões instaladas
- ✅ Arquivos de configuração
- ✅ Teste com arquivo real

---

## ✅ CHECKLIST FINAL

Para confirmar que está 100% funcionando:

- [ ] Node.js >= 18.18.0 (`node --version`)
- [ ] Extensões ESLint e Prettier instaladas
- [ ] ESLint status = "Running" (canto inferior do VSCode)
- [ ] Output > ESLint mostra "server is running"
- [ ] Arquivo app.js linha 7 mostra linha amarela ondulada
- [ ] Ao adicionar `var teste = "teste"` aparecem erros vermelhos
- [ ] Painel Problems (Ctrl+Shift+M) lista os erros
- [ ] Ao passar mouse sobre erro, mostra descrição

**Se todos os itens checados → ESLint está 100% funcionando! 🎉**

---

## 💡 Ações Rápidas

Quando o cursor está em uma linha com erro:

1. **Tecle:** `Ctrl + .` (ponto)
2. **Aparece menu de Quick Fix:**
   - Fix this prettier/prettier problem
   - Fix all auto-fixable problems
   - Disable eslint for this line
3. **Selecione a ação desejada**

OU:

- **Clique na lâmpada 💡** que aparece ao lado do número da linha

---

## 🆘 Ainda não funciona?

1. Execute o diagnóstico:
   ```bash
   ./fix-eslint-vscode.sh
   ```

2. Veja os logs detalhados:
   - `Ctrl + Shift + U` > Selecione "ESLint"
   - Copie qualquer erro em vermelho

3. Desinstale e reinstale as extensões:
   - ESLint
   - Prettier
   - Reinicie o VSCode

4. Último recurso - reset completo:
   ```bash
   rm -rf node_modules .vscode .eslintcache
   yarn install
   # Feche e abra o VSCode
   ```
