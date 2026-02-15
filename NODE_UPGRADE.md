# ⚠️ IMPORTANTE: Atualizar Versão do Node.js

## Problema

O VSCode não está mostrando erros do ESLint e Prettier porque o projeto está usando **Node.js v12.1.0**, que é muito antigo.

O ESLint 10.x requer **Node.js >= 18.18.0**.

## Solução Rápida

Execute estes comandos no terminal:

```bash
# 1. Mudar para Node.js 22.19.0 (recomendado)
nvm use

# Ou especificamente:
nvm use 22.19.0

# 2. Verificar se mudou
node --version
# Deve mostrar: v22.19.0

# 3. Instalar dependências
yarn install

# 4. Testar o ESLint
yarn lint
```

## Como Funciona

1. O arquivo `.nvmrc` define a versão do Node.js para este projeto
2. O comando `nvm use` lê esse arquivo e muda automaticamente
3. O VSCode detectará a nova versão ao recarregar

## Recarregar VSCode

Depois de trocar a versão do Node:

1. Pressione `Ctrl+Shift+P` (ou `Cmd+Shift+P` no Mac)
2. Digite: `Developer: Reload Window`
3. Pressione Enter

OU

Feche e abra o VSCode novamente.

## Verificar se Funcionou

Abra qualquer arquivo `.js` no VSCode e:

1. Adicione uma linha com erro intencional:
   ```javascript
   var teste = "teste"  // var não é permitido + double quotes
   ```

2. Você deve ver **linhas vermelhas/amarelas** indicando os erros

3. Ao passar o mouse, deve mostrar:
   - `Unexpected var, use let or const instead`
   - Warnings do Prettier

## Manter Node 22 como Padrão (Opcional)

Se quiser usar Node 22 como padrão em todos os projetos:

```bash
nvm alias default 22
```

## Versões Disponíveis

Você tem estas versões instaladas:
- ✅ v24.13.1 (mais recente)
- ✅ v22.19.0 (LTS recomendada) ⭐
- ✅ v20.19.5 (LTS)
- ✅ v18.16.0 (mínimo necessário)
- ❌ v12.1.0 (atual - muito antiga)

## Problemas?

Se ainda não funcionar após trocar a versão:

```bash
# Limpar cache e reinstalar
rm -rf node_modules yarn.lock
yarn install

# Recarregar VSCode
# Ctrl+Shift+P > Developer: Reload Window
```

## Extensões Necessárias no VSCode

Certifique-se de ter instalado:

1. **ESLint** (dbaeumer.vscode-eslint)
2. **Prettier** (esbenp.prettier-vscode)

Para instalar:
- `Ctrl+Shift+X` > Procurar "ESLint" e "Prettier" > Instalar
