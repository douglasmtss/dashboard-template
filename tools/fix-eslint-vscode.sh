#!/bin/bash

# Script para diagnosticar e corrigir problemas de ESLint inline no VSCode

echo "🔍 Diagnóstico de ESLint Inline no VSCode"
echo "=========================================="
echo ""

# Verificar versão do Node
echo "1️⃣  Verificando versão do Node.js..."
NODE_VERSION=$(node --version)
echo "   Node: $NODE_VERSION"

if [[ "$NODE_VERSION" < "v18.18.0" ]]; then
    echo "   ❌ Node muito antigo! Execute: nvm use 22.19.0"
    exit 1
else
    echo "   ✅ Versão OK"
fi
echo ""

# Verificar se ESLint funciona
echo "2️⃣  Testando ESLint no terminal..."
ESLINT_OUTPUT=$(npx eslint --version 2>&1)
if [[ $? -eq 0 ]]; then
    echo "   ✅ ESLint: $ESLINT_OUTPUT"
else
    echo "   ❌ ESLint com erro: $ESLINT_OUTPUT"
    exit 1
fi
echo ""

# Verificar extensões instaladas
echo "3️⃣  Verificando extensões do VSCode..."
ESLINT_EXT=$(code --list-extensions 2>/dev/null | grep eslint)
PRETTIER_EXT=$(code --list-extensions 2>/dev/null | grep prettier)

if [[ -n "$ESLINT_EXT" ]]; then
    echo "   ✅ ESLint extension: $ESLINT_EXT"
else
    echo "   ❌ ESLint extension NÃO instalada!"
    echo "      Instale: Ctrl+Shift+X > Procure 'ESLint'"
fi

if [[ -n "$PRETTIER_EXT" ]]; then
    echo "   ✅ Prettier extension: $PRETTIER_EXT"
else
    echo "   ❌ Prettier extension NÃO instalada!"
    echo "      Instale: Ctrl+Shift+X > Procure 'Prettier'"
fi
echo ""

# Verificar arquivos de configuração
echo "4️⃣  Verificando arquivos de configuração..."
files=("eslint.config.js" ".vscode/settings.json" ".prettierrc")
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "   ✅ $file"
    else
        echo "   ❌ $file - NÃO ENCONTRADO!"
    fi
done
echo ""

# Limpar cache do ESLint
echo "5️⃣  Limpando cache do ESLint..."
rm -rf .eslintcache node_modules/.cache 2>/dev/null
echo "   ✅ Cache limpo"
echo ""

# Testar arquivo
echo "6️⃣  Testando ESLint em arquivo..."
TEST_FILE="src/js/app.js"
if [ -f "$TEST_FILE" ]; then
    # Criar backup
    cp "$TEST_FILE" "${TEST_FILE}.backup"

    # Adicionar erro intencional
    echo 'var teste = "teste"' >> "$TEST_FILE"

    # Testar
    LINT_RESULT=$(npx eslint "$TEST_FILE" 2>&1)
    if [[ "$LINT_RESULT" == *"error"* ]] || [[ "$LINT_RESULT" == *"warning"* ]]; then
        echo "   ✅ ESLint detecta erros no terminal"
    else
        echo "   ⚠️  ESLint não detectou erros"
    fi

    # Restaurar backup
    mv "${TEST_FILE}.backup" "$TEST_FILE"
else
    echo "   ⚠️  Arquivo de teste não encontrado"
fi
echo ""

echo "=========================================="
echo "📋 PRÓXIMOS PASSOS PARA ATIVAR NO VSCODE:"
echo ""
echo "1. Verifique se as extensões estão instaladas:"
echo "   - Pressione Ctrl+Shift+X"
echo "   - Procure: ESLint"
echo "   - Procure: Prettier"
echo "   - Clique em 'Install' se necessário"
echo ""
echo "2. Abra as configurações do VSCode:"
echo "   - Ctrl+Shift+P"
echo "   - Digite: 'Preferences: Open User Settings (JSON)'"
echo "   - Adicione estas linhas:"
echo '   "eslint.enable": true,'
echo '   "eslint.useFlatConfig": true,'
echo ""
echo "3. Reinicie o ESLint Server:"
echo "   - Ctrl+Shift+P"
echo "   - Digite: 'ESLint: Restart ESLint Server'"
echo ""
echo "4. Recarregue o VSCode:"
echo "   - Ctrl+Shift+P"
echo "   - Digite: 'Developer: Reload Window'"
echo ""
echo "5. Abra um arquivo .js e adicione um erro:"
echo "   var teste = \"teste\""
echo "   (deve aparecer linhas vermelhas/amarelas)"
echo ""
echo "=========================================="
