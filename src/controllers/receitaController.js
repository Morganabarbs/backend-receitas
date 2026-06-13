const axios = require('axios');

// Base URL da TheMealDB
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

// @desc    Buscar receita por nome
// @route   GET /api/receitas/nome/:nome
exports.buscarReceitaPorNome = async (req, res) => {
  try {
    const { nome } = req.params;
    const response = await axios.get(`${BASE_URL}/search.php?s=${nome}`);
    const receitas = response.data.meals;

    if (!receitas) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Receita não encontrada',
      });
    }

    return res.status(200).json({
      sucesso: true,
      quantidade: receitas.length,
      dados: receitas,
    });
  } catch (error) {
    console.error('Erro ao buscar receita por nome:', error.message);
    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro interno ao buscar receita',
    });
  }
};

// @desc    Buscar receita por ID
// @route   GET /api/receitas/:id
exports.buscarReceitaPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
    const receita = response.data.meals ? response.data.meals[0] : null;

    if (!receita) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Receita não encontrada',
      });
    }

    return res.status(200).json({
      sucesso: true,
      dados: receita,
    });
  } catch (error) {
    console.error('Erro ao buscar receita por ID:', error.message);
    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro interno ao buscar receita',
    });
  }
};

// @desc    Listar categorias de receitas
// @route   GET /api/receitas/categorias
exports.listarCategorias = async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/categories.php`);
    const categorias = response.data.categories;

    return res.status(200).json({
      sucesso: true,
      quantidade: categorias.length,
      dados: categorias,
    });
  } catch (error) {
    console.error('Erro ao listar categorias:', error.message);
    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro interno ao listar categorias',
    });
  }
};

// @desc    Filtrar receitas por categoria
// @route   GET /api/receitas/categoria/:cat
exports.filtrarPorCategoria = async (req, res) => {
  try {
    const { cat } = req.params;
    const response = await axios.get(`${BASE_URL}/filter.php?c=${cat}`);
    const receitas = response.data.meals;

    if (!receitas) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Nenhuma receita encontrada para esta categoria',
      });
    }

    return res.status(200).json({
      sucesso: true,
      quantidade: receitas.length,
      dados: receitas,
    });
  } catch (error) {
    console.error('Erro ao filtrar receitas por categoria:', error.message);
    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro interno ao filtrar receitas',
    });
  }
};
