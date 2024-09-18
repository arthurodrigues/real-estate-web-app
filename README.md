# 🏠 Real Estate Web App

![MERN Stack](https://img.shields.io/badge/MERN-Stack-blue) 
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-In%20Development-orange)

Uma aplicação web moderna desenvolvida com o **MERN Stack** (MongoDB, Express, React, Node.js) para facilitar a postagem e busca de imóveis para venda ou aluguel. O projeto ainda está em andamento e novas funcionalidades estão sendo implementadas.

---

## 🚀 Sobre o Projeto

O **Real Estate Web App** é uma plataforma centralizada que conecta proprietários e compradores ou inquilinos em busca de imóveis. Seja para comprar ou alugar, a aplicação permite que os usuários publiquem seus imóveis com fotos, descrições detalhadas e valores, e que potenciais clientes filtrem e encontrem propriedades adequadas às suas necessidades.

🔨 **Status**: O projeto está em desenvolvimento, com diversas funcionalidades ainda em progresso.

---

## 🔑 Funcionalidades Principais

- 📋 **Cadastro e Login de Usuários**
    - Autenticação via JWT (JSON Web Token) com criptografia de senhas (bcrypt).
  
- 🏠 **Postagem de Imóveis**
    - Propriedades com imagens, descrições detalhadas, valores, localização e informações de contato.
  
- 🔍 **Busca e Filtros Avançados**
    - Filtros baseados em localização, tipo de imóvel, faixa de preço e outras opções personalizáveis.

- 💖 **Sistema de Favoritos**
    - Usuários podem salvar imóveis em uma lista de favoritos para fácil acesso posterior.

- 📱 **Responsividade**
    - Design adaptado para todos os tipos de dispositivos, garantindo uma experiência perfeita no desktop, tablet ou celular.

- 🔧 **Área Administrativa (Em Breve)**
    - Gerenciamento de anúncios com ferramentas de edição e remoção.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend**: 
  - [React](https://reactjs.org/)
  - [React Router](https://reactrouter.com/) para navegação
  - [Redux](https://redux.js.org/) para gerenciamento de estado
  - [Axios](https://axios-http.com/) para comunicação com APIs

- **Backend**: 
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [Multer](https://www.npmjs.com/package/multer) para upload de imagens

- **Banco de Dados**:
  - [MongoDB](https://www.mongodb.com/)
  - [Mongoose](https://mongoosejs.com/) para modelagem de dados

- **Autenticação**:
  - [JWT](https://jwt.io/) para autenticação
  - [BCrypt](https://www.npmjs.com/package/bcrypt) para hashing de senhas

---

## 📦 Como Executar o Projeto Localmente

### Pré-requisitos

Você precisará ter instalado:

- **Node.js** e **npm**: [Instalar Node.js](https://nodejs.org/)
- **MongoDB**: [Configurar MongoDB](https://www.mongodb.com/)

### Passo a Passo

1. **Clone o repositório**:
    ```bash
    git clone https://github.com/arthurodrigues/real-estate-web-app.git
    ```

2. **Instale as dependências** (para backend e frontend):
    ```bash
    # No diretório raiz (backend)
    npm install

    # No diretório do frontend (client)
    cd client
    npm install
    ```

3. **Configure as variáveis de ambiente**:

    Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
    ```bash
    PORT=5000
    MONGO_URI=sua_url_do_mongoDB
    JWT_SECRET=sua_chave_secreta
    CLOUDINARY_URL=sua_url_do_cloudinary
    ```

4. **Inicie o servidor**:
    ```bash
    npm run dev
    ```

    O servidor backend rodará em `http://localhost:5000` e o frontend em `http://localhost:3000`.

---

## 🚨 Como Usar

1. Acesse `http://localhost:3000` para visualizar a interface.
2. Registre-se ou faça login para começar a postar imóveis.
3. Utilize o sistema de filtros e favoritos para encontrar os melhores imóveis de acordo com suas preferências.

---

## 🧑‍💻 Contribuições

Contribuições são sempre bem-vindas! Siga os passos abaixo para colaborar:

1. **Fork** o projeto.
2. Crie uma **branch** para sua feature (`git checkout -b feature/nome-feature`).
3. Adicione suas mudanças (`git commit -m 'Adicionei nova funcionalidade'`).
4. **Push** para a branch (`git push origin feature/nome-feature`).
5. Abra um **Pull Request** e descreva suas alterações.

---

## 📄 Licença

Este projeto está licenciado sob os termos da licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

### 👨‍💻 Desenvolvedor

Desenvolvido por **Arthur Rodrigues (https://github.com/arthurodrigues)**. Fique à vontade para entrar em contato ou contribuir com o projeto!

---

### 📢 Nota

Este projeto está em desenvolvimento, e novas funcionalidades serão implementadas gradativamente. Acompanhe o repositório para ficar por dentro das atualizações!
