# API de Livros (Backend)

API RESTful para gerenciamento de livros utilizando Node.js, Express e MongoDB.

## Funcionalidades
- Criar livro (POST /api/livros)
- Listar livros (GET /api/livros)
- Buscar livro (GET /api/livros/:id)
- Atualizar livro (PUT /api/livros/:id)
- Excluir livro (DELETE /api/livros/:id)

## Tecnologias
- Node.js
- Express
- MongoDB (Mongoose)
- CORS
- dotenv
- morgan

## Como executar localmente
1. Instale as dependências: `npm install`
2. Configure o arquivo `.env` com a sua URI do MongoDB (MONGODB_URI).
3. Execute o projeto: `npm run dev` (desenvolvimento) ou `npm start` (produção).

## Deploy no Render
O deploy está configurado via arquivo `render.yaml`.
URL Base da API: https://back-end-geraldo-crud.onrender.com/api
