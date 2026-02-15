#!/bin/bash

# Script de diagnóstico para verificar configuração do ESLint e Prettier

echo "🔍 Diagnóstico do Ambiente de Desenvolvimento"
echo "=============================================="
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check Node version
echo "📦 Versão do Node.js:"
NODE_VERSION=$(node --version)
echo "   $NODE_VERSION"

if [[ "$NODE_VERSION" < "v18.18.0" ]]; then
    echo -e "   ${RED}❌ Versão muito antiga! Necessário >= 18.18.0${NC}"
    echo -e "   ${YELLOW}Execute: nvm use${NC}"
else
    echo -e "   ${GREEN}✅ Versão OK${NC}"
fi
echo ""

# Check Yarn/npm
echo "📦 Gerenciador de Pacotes:"
if command -v yarn &> /dev/null; then
    YARN_VERSION=$(yarn --version)
    echo -e "   ${GREEN}✅ Yarn $YARN_VERSION${NC}"
elif command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    echo -e "   ${GREEN}✅ npm $NPM_VERSION${NC}"
else
    echo -e "   ${RED}❌ Nenhum gerenciador encontrado${NC}"
fi
echo ""

# Check if node_modules exists
echo "📁 Dependências:"
if [ -d "node_modules" ]; then
    echo -e "   ${GREEN}✅ node_modules existe${NC}"
else
    echo -e "   ${RED}❌ node_modules não encontrado${NC}"
    echo -e "   ${YELLOW}Execute: yarn install${NC}"
fi
echo ""

# Check ESLint
echo "🔧 ESLint:"
if [ -f "node_modules/.bin/eslint" ]; then
    ESLINT_VERSION=$(npx eslint --version 2>&1)
    if [[ $ESLINT_VERSION == *"v"* ]]; then
        echo -e "   ${GREEN}✅ ESLint instalado: $ESLINT_VERSION${NC}"
    else
        echo -e "   ${RED}❌ Erro ao executar ESLint${NC}"
        echo "   $ESLINT_VERSION"
    fi
else
    echo -e "   ${RED}❌ ESLint não instalado${NC}"
fi
echo ""

# Check Prettier
echo "💅 Prettier:"
if [ -f "node_modules/.bin/prettier" ]; then
    PRETTIER_VERSION=$(npx prettier --version 2>&1)
    echo -e "   ${GREEN}✅ Prettier instalado: $PRETTIER_VERSION${NC}"
else
    echo -e "   ${RED}❌ Prettier não instalado${NC}"
fi
echo ""

# Check config files
echo "⚙️  Arquivos de Configuração:"
files=("eslint.config.js" ".prettierrc" ".nvmrc" ".vscode/settings.json")
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo -e "   ${GREEN}✅ $file${NC}"
    else
        echo -e "   ${RED}❌ $file não encontrado${NC}"
    fi
done
echo ""

# Test ESLint on a file
echo "🧪 Teste do ESLint:"
if [ -f "node_modules/.bin/eslint" ] && [[ "$NODE_VERSION" > "v18" ]]; then
    TEST_RESULT=$(npx eslint src/js/app.js 2>&1)
    if [[ $TEST_RESULT == *"error"* ]] || [[ $TEST_RESULT == *"warning"* ]]; then
        echo -e "   ${YELLOW}⚠️  ESLint encontrou problemas (isso é normal)${NC}"
        echo "   Execute: yarn lint para ver detalhes"
    elif [[ $TEST_RESULT == "" ]]; then
        echo -e "   ${GREEN}✅ ESLint funcionando (sem erros)${NC}"
    else
        echo -e "   ${RED}❌ Erro ao executar ESLint${NC}"
        echo "   $TEST_RESULT"
    fi
else
    echo -e "   ${YELLOW}⏭️  Pulando (Node muito antigo ou ESLint não instalado)${NC}"
fi
echo ""

# VSCode extensions check
echo "🔌 Extensões VSCode Recomendadas:"
echo "   - ESLint (dbaeumer.vscode-eslint)"
echo "   - Prettier (esbenp.prettier-vscode)"
echo ""
echo "   Para instalar: Ctrl+Shift+X > Buscar 'ESLint' e 'Prettier'"
echo ""

# Summary
echo "=============================================="
echo "📋 Resumo:"
echo ""
if [[ "$NODE_VERSION" < "v18.18.0" ]]; then
    echo -e "${RED}🔴 AÇÃO NECESSÁRIA:${NC}"
    echo "   1. Execute: nvm use"
    echo "   2. Execute: yarn install"
    echo "   3. Recarregue o VSCode (Ctrl+Shift+P > Reload Window)"
elif [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}🟡 AÇÃO NECESSÁRIA:${NC}"
    echo "   1. Execute: yarn install"
    echo "   2. Recarregue o VSCode"
else
    echo -e "${GREEN}🟢 Ambiente configurado corretamente!${NC}"
    echo ""
    echo "Se o VSCode ainda não mostrar erros:"
    echo "   1. Verifique se as extensões ESLint e Prettier estão instaladas"
    echo "   2. Recarregue o VSCode (Ctrl+Shift+P > Reload Window)"
    echo "   3. Abra Output (Ctrl+Shift+U) > ESLint para ver logs"
fi
echo ""
