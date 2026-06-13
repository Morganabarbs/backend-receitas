const express = require('express');
const router = express.Router();

// Controllers: CRUD no MongoDB Atlas
const {
  listarReceitas,
  buscarReceita,
  criarReceita,
  atualizarReceita,
  excluirReceita,
} = require('../controllers/receitaCrudController');

// Controllers: integração com TheMealDB
const {
  buscarReceitaPorNome,
  buscarReceitaPorId,
  listarCategorias,
  filtrarPorCategoria,
} = require('../controllers/receitaController');

/* ============================
   Rotas CRUD (MongoDB Atlas)
   ============================ */

// GET    /api/receitas       → Listar todas as receitas
// POST   /api/receitas       → Cadastrar nova receita
router.route('/')
  .get(listarReceitas)
  .post(criarReceita);

// GET    /api/receitas/:id   → Buscar receita por ID
// PUT    /api/receitas/:id   → Atualizar receita
// DELETE /api/receitas/:id   → Excluir receita
router.route('/:id')
  .get(buscarReceita)
  .put(atualizarReceita)
  .delete(excluirReceita);

/* ============================
   Rotas externas (TheMealDB)
   ============================ */

// GET    /api/receitas/nome/:nome       → Buscar receita por nome
router.get('/nome/:nome', buscarReceitaPorNome);

// GET    /api/receitas/external/:id     → Buscar receita externa por ID
router.get('/external/:id', buscarReceitaPorId);

// GET    /api/receitas/categorias       → Listar categorias externas
router.get('/categorias', listarCategorias);

// GET    /api/receitas/categoria/:cat   → Filtrar receitas externas por categoria
router.get('/categoria/:cat', filtrarPorCategoria);

module.exports = router;

// rota para pratos do dia
router.get('/pratos-do-dia', async (req, res) => {
  try {
    const pratos = await Receita.aggregate([{ $sample: { size: 10 } }]);
    res.json(pratos);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar pratos do dia' });
  }
});
