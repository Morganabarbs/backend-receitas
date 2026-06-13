require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const receitaRoutes = require('./routes/receitaRoutes');
// Se for usar MongoDB Atlas, descomente:
const connectDB = require('./config/database');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

connectDB();

// Rota de health check
app.get('/', (req, res) => {
  res.json({
    sucesso: true,
    mensagem: '🍲 API de Receitas funcionando!',
    versao: '1.0.0',
  });
});

// Rotas da API
app.use('/api/receitas', receitaRoutes);

// Tratamento de rota não encontrada
app.use((req, res) => {
  res.status(404).json({
    sucesso: false,
    mensagem: 'Rota não encontrada',
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`🍴 API: http://localhost:${PORT}/api/receitas`);
});
