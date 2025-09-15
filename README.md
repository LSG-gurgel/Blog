#### Projeto 9 - BLOG
Atividade para prática de [Next.js](https://nextjs.org) do Programa Desenvolve do Grupo Boticário.

# blog Crochetando
Blog elegante sobre crochê contemporâneo, sem os esteriótipos de artesanato/artesanal.

#### *Vamos falar de crochê além das linhas, agulhas e pontos.*

## 🧶 Características:
**Design Editorial**: Estilo inspirado no Intercept Brasil - minimalista e sofisticado, com fontes de boa legibilidade;

**Conteúdo Qualificado**: Artigos aprofundados sobre crochê na moda sustentável;

**Responsivo**: Adaptado para desktop, tablet e mobile;

**Performance Otimizada**:Desenvolvido com Next.js 14 e App Router.

## 🚀 Tecnologias Utilizadas

- **Framework**: Next.js 14 com App Router
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Fontes**: Source Serif 4 e Inter


## 🎨 Posts Disponíveis

1. **Slow fashion: O Papel do Crochê na moda sustentável**
   - Slug: `/posts/croche-moda-consciente`
   - Categoria: Moda Sustentável

2. **Desmistificando o Crochê: Por que essa arte não é só 'Coisa de Vó'**
   - Slug: `/posts/desmistificando-croche`
   - Categoria: Cultura

3. **Crochê terapêutico: Os benefícios mentais de tecer com as mãos**
   - Slug: `/posts/croche-terapeutico`
   - Categoria: Bem-Estar
   - **ARTIGO NÃO ENCONTRADO**

## 🛠️ Como Executar Localmente

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

## Instalação

1. **Clonar repositório**
   ```bash
   git clone https://github.com/LSG-gurgel/Blog.git
   cd Blog

2. **Instalar as dependências**
   ```basch
    npm install
    # ou
    yarn install

3. **Executar o servidor de desenvolvimento**
    ````bash
    npm run dev
    # ou
    yarn dev

4. **Acesse o projeto**
   Abra http://localhost:3000 no seu navegador.

## 📝 Para adicionar Novos Posts
Edite o arquivo app/posts/[slug]/page.tsx e adicione novos objetos ao array posts:

  ````basch
typescript
{
  slug: "novo-post",        // URL amigável (sem espaços)
  title: "Título do Post",  // Título completo
  content: `                // Conteúdo em HTML
    <p>Seu conteúdo aqui...</p>
    <h2>Subtítulo</h2>
  `,
  date: "20 Janeiro 2024",  // Data de publicação
  category: "Categoria",    // Categoria do post
  author: "Nome do Autor"   // Autor do post
}

