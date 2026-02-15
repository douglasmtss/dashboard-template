# 🚨 GUIA RÁPIDO: Ativar ESLint e Prettier no VSCode

## ⚠️ PROBLEMA IDENTIFICADO

O Node.js v12.1.0 é **MUITO ANTIGO** e incompatível com:
- ❌ ESLint 10.x (requer Node >= 18.18.0)
- ❌ Prettier 3.x (requer Node >= 14)

Por isso o VSCode não está mostrando os erros e warnings nas linhas!

---

## ✅ SOLUÇÃO COMPLETA (5 minutos)

### 📍 PASSO 1: Abrir o Terminal no VSCode

1. Pressione `` Ctrl+` `` (ou `View > Terminal`)
2. Certifique-se de que está na pasta do projeto

---

### 📍 PASSO 2: Trocar a Versão do Node.js

**Cole este comando e pressione Enter:**

```bash
nvm use
```

✅ **Resultado esperado:**
```
Found '/home/douglas-silva/www/dashboard-template/.nvmrc' with version <22.19.0>
Now using node v22.19.0 (npm v10.x.x)
```

❌ **Se der erro:**
```bash
# Tente este comando:
nvm use 22.19.0

# Ou instale a versão:
nvm install 22.19.0
nvm use 22.19.0
```

**🔍 Verificar se funcionou:**
```bash
node --version
```
Deve mostrar: `v22.19.0` (ou v22.x.x ou v24.x.x - qualquer versão >= 18.18.0)

---

### 📍 PASSO 3: Limpar e Reinstalar Dependências

**Cole estes comandos um por um:**

```bash
# Remover instalação antiga
rm -rf node_modules yarn.lock

# Instalar com Node atualizado
yarn install
```

⏱️ **Aguarde 1-2 minutos** para as dependências serem instaladas.

✅ **Resultado esperado:** Nenhum erro, instalação completa.

---

### 📍 PASSO 4: Verificar se ESLint Funciona

**Cole este comando:**

```bash
yarn lint
```

✅ **Resultado esperado:**
- Lista de erros/warnings OU
- "No problems" (se o código estiver OK)

❌ **Se der erro:** Node ainda está na versão antiga, volte ao Passo 2.

---

### 📍 PASSO 5: Instalar Extensões do VSCode

1. Pressione `Ctrl+Shift+X` (abre o painel de extensões)

2. **Procure e instale:**
   - `ESLint` (dbaeumer.vscode-eslint)
   - `Prettier - Code formatter` (esbenp.prettier-vscode)

3. Clique em **"Install"** em cada uma

---

### 📍 PASSO 6: Recarregar o VSCode

**Opção A - Recarregar janela:**
1. Pressione `Ctrl+Shift+P`
2. Digite: `reload window`
3. Selecione: `Developer: Reload Window`
4. Pressione Enter

**Opção B - Fechar e abrir:**
- Feche o VSCode completamente
- Abra novamente

---

### 📍 PASSO 7: Testar se Está Funcionando

1. **Abra o arquivo:** `src/js/app.js`

2. **Adicione esta linha no final do arquivo:**
   ```javascript
   var teste = "teste"
   ```

3. **Espere 2-3 segundos**

4. **O que você DEVE ver:**
   - 🔴 Linha vermelha ondulada em `var`
   - 🟡 Linha amarela ondulada nas aspas duplas `"teste"`
   - Ao passar o mouse:
     - "Unexpected var, use let or const instead"
     - "Replace `\"teste\"` with `'teste'`"

5. **Remova a linha de teste** após verificar

---

## 🎯 CHECKLIST FINAL

Confirme que tudo está OK:

- [x] Node.js versão >= 18 (`node --version`)
- [x] `yarn install` executado sem erros
- [x] `yarn lint` funciona
- [x] Extensões ESLint e Prettier instaladas
- [x] VSCode recarregado
- [x] Erros aparecem nas linhas de código

---

## 🔧 SE AINDA NÃO FUNCIONAR

### Verificar Output do ESLint no VSCode

1. Pressione `Ctrl+Shift+U` (abre Output)
2. No dropdown, selecione: **"ESLint"**
3. Procure por erros em vermelho

**Possíveis problemas:**

#### ❌ "ESLint is disabled"
**Solução:**
1. `Ctrl+Shift+P`
2. Digite: `ESLint: Enable ESLint`

#### ❌ "Failed to load config"
**Solução:**
```bash
rm -rf node_modules
yarn install
```

#### ❌ "Requires Node >= 18"
**Solução:** Volte ao Passo 2 e verifique `node --version`

---

## 🔄 COMANDO DE DIAGNÓSTICO

Para verificar tudo de uma vez:

```bash
./diagnose.sh
```

Deve mostrar tudo em ✅ verde.

---

## 🆘 TROUBLESHOOTING AVANÇADO

### Forçar VSCode a Usar o Node Correto

1. Abra `.vscode/settings.json`
2. Adicione:
   ```json
   {
     "eslint.runtime": "/home/douglas-silva/.nvm/versions/node/v22.19.0/bin/node"
   }
   ```
3. Recarregue o VSCode

### Limpar Cache do ESLint

```bash
# No terminal do VSCode:
npx eslint --cache-location ./node_modules/.cache/eslint --clear
```

### Verificar se Prettier Está Ativo

1. Abra qualquer arquivo `.js`
2. Botão direito > "Format Document"
3. Se perguntar, escolha: **"Prettier - Code formatter"**

---

## 📞 AINDA COM PROBLEMA?

Execute e envie o resultado:

```bash
echo "=== Node Version ==="
node --version
echo ""
echo "=== NPM Version ==="
npm --version
echo ""
echo "=== ESLint Test ==="
npx eslint --version
echo ""
echo "=== Prettier Test ==="
npx prettier --version
echo ""
echo "=== VSCode Extensions ==="
code --list-extensions | grep -E "(eslint|prettier)"
```
