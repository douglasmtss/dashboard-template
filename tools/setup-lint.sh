#!/bin/bash

# Script de configuração rápida - cole no terminal linha por linha

echo "🔧 Iniciando configuração do ESLint e Prettier..."
echo ""

# Step 1: Trocar versão do Node
echo "📦 PASSO 1: Trocando versão do Node.js..."
nvm use
if [ $? -eq 0 ]; then
    echo "✅ Node.js atualizado!"
    node --version
else
    echo "❌ Erro ao trocar versão. Tentando nvm use 22.19.0..."
    nvm use 22.19.0
fi
echo ""

# Step 2: Limpar node_modules
echo "🧹 PASSO 2: Limpando instalações antigas..."
rm -rf node_modules yarn.lock package-lock.json
echo "✅ Limpeza concluída!"
echo ""

# Step 3: Instalar dependências
echo "📥 PASSO 3: Instalando dependências (pode demorar 1-2 min)..."
yarn install
if [ $? -eq 0 ]; then
    echo "✅ Dependências instaladas com sucesso!"
else
    echo "❌ Erro na instalação. Tente: npm install"
    npm install
fi
echo ""

# Step 4: Testar ESLint
echo "🧪 PASSO 4: Testando ESLint..."
npx eslint --version
if [ $? -eq 0 ]; then
    echo "✅ ESLint funcionando!"
else
    echo "❌ ESLint com problema"
fi
echo ""

# Step 5: Testar Prettier
echo "💅 PASSO 5: Testando Prettier..."
npx prettier --version
if [ $? -eq 0 ]; then
    echo "✅ Prettier funcionando!"
else
    echo "❌ Prettier com problema"
fi
echo ""

# Step 6: Executar lint
echo "🔍 PASSO 6: Verificando código..."
yarn lint --quiet
echo ""

# Summary
echo "=============================================="
echo "✅ CONFIGURAÇÃO CONCLUÍDA!"
echo ""
echo "🎯 PRÓXIMOS PASSOS:"
echo ""
echo "   1. Instale as extensões no VSCode:"
echo "      - ESLint (dbaeumer.vscode-eslint)"
echo "      - Prettier (esbenp.prettier-vscode)"
echo ""
echo "   2. Recarregue o VSCode:"
echo "      Ctrl+Shift+P > 'Reload Window'"
echo ""
echo "   3. Teste abrindo src/js/app.js e adicionando:"
echo "      var teste = \"teste\""
echo "      (deve mostrar erros em vermelho/amarelo)"
echo ""
echo "=============================================="
