# Deployment Instructions

O site foi construído com Next.js e precisa de configuração específica para funcionar no GitHub Pages.

## Opção 1: GitHub Actions (Recomendado)

Esta é a forma mais simples e automática:

1. **Configure o GitHub Pages**:
   - Vá em `Settings` → `Pages` no seu repositório
   - Em **Source**, selecione `GitHub Actions` (ao invés de "Deploy from a branch")

2. **Merge para main**:
   ```bash
   git checkout main
   git merge claude/ai-pm-portfolio-site-011CUoQhEfCnLMEjtjc5nMQx
   git push
   ```

3. **Pronto!** O GitHub Actions vai automaticamente:
   - Fazer build do site
   - Fazer deploy para GitHub Pages
   - O site estará disponível em https://andreganske.com.br

## Opção 2: Deploy Manual

Se preferir fazer deploy manual:

1. **Build local**:
   ```bash
   npm run build
   ```

2. **Verificar output**:
   - Os arquivos estáticos estarão em `out/`
   - Inclui `index.html`, `CNAME`, `.nojekyll` e pasta `_next/`

3. **Deploy**:
   - Você pode copiar todo o conteúdo de `out/` para um servidor web
   - Ou usar qualquer serviço de hosting estático (Vercel, Netlify, etc.)

## Estrutura de Deploy

O build gera:
```
out/
├── index.html          # Página principal
├── 404.html           # Página de erro
├── CNAME              # Domínio personalizado
├── .nojekyll          # Previne processamento Jekyll
└── _next/             # Assets Next.js (CSS, JS, etc.)
```

## Troubleshooting

### Site mostra README ao invés do portfolio

**Problema**: GitHub Pages está configurado para servir da branch diretamente.

**Solução**: Configure para usar GitHub Actions (Opção 1 acima).

### Página 404 ou estilos não carregam

**Problema**: Falta o arquivo `.nojekyll`

**Solução**: O build já inclui `.nojekyll`. Certifique-se de que ele foi deployado junto com os outros arquivos.

### Build falha

**Problema**: Dependências não instaladas ou Node.js desatualizado.

**Solução**:
```bash
# Instalar dependências
npm install

# Verificar versão do Node (deve ser 18+)
node --version

# Rebuild
npm run build
```

## Desenvolvimento Local

Para testar localmente antes do deploy:

```bash
# Modo desenvolvimento
npm run dev
# Acesse http://localhost:3000

# Build de produção + teste
npm run build
npm run start
# Acesse http://localhost:3000
```

## Customização

Para atualizar o conteúdo:

1. **Edite os componentes** em `components/`:
   - `Hero.tsx` - Seção principal
   - `About.tsx` - Sobre você
   - `Experience.tsx` - Experiência
   - `Skills.tsx` - Habilidades
   - `Contact.tsx` - Contato

2. **Build e deploy**:
   ```bash
   npm run build
   ```

3. **Push para main** (se usando GitHub Actions):
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```

---

## Próximos Passos

1. Merge da branch `claude/ai-pm-portfolio-site-011CUoQhEfCnLMEjtjc5nMQx` para `main`
2. Configure GitHub Pages para usar **GitHub Actions**
3. Aguarde o deploy automático (leva ~2 minutos)
4. Acesse https://andreganske.com.br

Qualquer dúvida, consulte a [documentação do Next.js](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports) sobre static exports.
