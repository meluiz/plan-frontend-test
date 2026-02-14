# ⭐ Desafio Técnico – Desenvolvedor(a) Front-End (Next.js)

​

## ⭐ Objetivo

​
Desenvolver uma aplicação web com **Next.js** que consuma a [REST Countries API](https://restcountries.com/#rest-countries), permitindo ao usuário explorar e visualizar informações sobre países de forma interativa e responsiva.
​

---

​

## ⭐ Contexto

​
A aplicação será um catálogo de países com recursos de filtragem e visualização de detalhes. O usuário deve poder:
​

- Navegar por uma lista de países.
- Filtrar por:
  - Nome do país (busca textual).
  - Continente (checkboxes).
  - Idioma (select).
- Acessar uma página com detalhes do país selecionado.
  ​

---

​

## ⭐ Layout

Segue links do layout para aplicação:

- [Figma Componentes](https://www.figma.com/design/uqRKSNiAtLlHWzg6qs7J0v/TESTE-FRONT-PLAN?node-id=0-1&p=f)
- [Figma Apresentação](https://www.figma.com/proto/uqRKSNiAtLlHWzg6qs7J0v/TESTE-FRONT-PLAN?node-id=2-615&t=jAEkXLJ8nXUMIDD4-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1)

**A responsividade deve ser aplicada para manter o layout mais coerente com o definido acima.**

---

​

## ⭐ Requisitos Técnicos

​

- Utilizar **Next.js** como framework principal ([https://nextjs.org/](https://nextjs.org/)).
- Utilizar **ESLint**, conforme [documentação oficial](https://nextjs.org/docs/app/api-reference/config/eslint).
- Utilizar **TypeScript**
- Garantir **responsividade** da aplicação.
- Exibir as informações dos países **em português**, quando disponível, utilizando o campo `translations.por` da versão `v3.1` da REST Countries API.
- Código organizado, componentizado e limpo.
  ​

---

​

## ⭐ Funcionalidades Esperadas

​

### 1. Página Inicial

- Lista de países com:
  - Nome (em português)
  - Bandeira
  - Região
- Filtros:
  - **Busca por nome**
  - **Filtro por continente** (checkbox)
  - **Filtro por idioma** (select)
    ​

### 2. Página de Detalhes

- Informações completas de um país:
  - Nome oficial
  - População
  - Moeda
  - Línguas faladas
  - Bandeira
  - Região / Sub-região
    ​

---

​

## ⭐ Diferenciais (Desejável, não obrigatório)

​

- Estilização moderna: **TailwindCSS**, **CSS Modules**
- Configuração de **Prettier** e **ESLint**
- Considerações básicas de acessibilidade
  ​

---

## ⭐ Considerações sobre o repositório

​

Este projeto deve ser utilizado como base para o desenvolvimento do seu teste. Alguns componentes estão presentes apenas como exemplo para o desenvolvedor, e devem ser removidos antes do início efetivo do desenvolvimento do teste.

​

## ⭐ Entrega

​

1. Faça um fork do repositório público <link do repositorio>.
2. Inclua no `README.md` as seguintes informações:
   - Instruções para rodar localmente.
   - Breve explicação sobre suas escolhas técnicas.
   - Link do deploy (se houver).
3. Submeta o link do repositório e, se aplicável, do deploy.
   ​
   Boa sorte! Estamos ansiosos para ver sua solução. 🚀

​

## ⭐ Instruções

Para rodar o projeto localmente, siga os passos abaixo:

1. **Faça o clone do repositório**:

   ```bash
   git clone https://github.com/meluiz/plan-frontend-test.git && cd plan-frontend-test
   cd plan-frontend-test
   ```

2. **Instale as dependências**:
   Você pode usar o gerenciador de pacotes de sua preferência:

   ```bash
   # npm
   npm install

   # yarn
   yarn install

   # bun
   bun install
   ```

3. **Inicie o servidor**:
   Utilize o seguinte comando:

   ```bash
   # npm
   npm start

   # yarn
   yarn start

   # bun
   bun start
   ```

4. **Acesse no Navegador**:
   Abra o navegador e navegue até `http://localhost:3000` ou outra porta que você estiver usando.

## ⭐ Breve explicação

O projeto foi desenvolvido e configurado do zero, utilizando as dependências mais atualizadas e seguras, garantindo assim um ambiente robusto e confiável. Com a adoção do Next.js 16 e React 19, o projeto oferece funcionalidades avançadas, como a renderização do lado do servidor (SSR) e a geração de sites estáticos (SSG). Essas características são fundamentais para otimizar tanto a performance quanto o SEO do projeto, resultando em uma experiência de usuário.

Além disso, a estrutura das pastas foi simplificada com foco na lógica de negócios. Essa organização não apenas facilita o entendimento do código, como também torna a manutenção e a escalabilidade do projeto mais eficientes.

## ⭐ Link do deploy (se houver)

Você pode acessar a versão deployada do projeto aqui: [Link do Deploy](http://countries.meluiz.com)
