const Receita = require('../models/Receita');

// @desc    Listar todas as receitas
// @route   GET /api/receitas
exports.listarReceitas = async (req, res) => {
  try {
    const receitas = await Receita.find().sort({ createdAt: -1 });
    return res.status(200).json({
      sucesso: true,
      quantidade: receitas.length,
      dados: receitas,
    });
  } catch (error) {
    console.error('Erro ao listar receitas:', error.message);
    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro interno ao buscar receitas',
    });
  }
};

// @desc    Buscar uma receita por ID
// @route   GET /api/receitas/:id
exports.buscarReceita = async (req, res) => {
  try {
    const receita = await Receita.findById(req.params.id);

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
    console.error('Erro ao buscar receita:', error.message);
    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro interno ao buscar receita',
    });
  }
};

// @desc    Cadastrar uma nova receita
// @route   POST /api/receitas
exports.criarReceita = async (req, res) => {
  try {
    const { nome, categoria, origem, instrucoes, ingredientes, favorito } = req.body;

    const receita = await Receita.create({
      nome,
      categoria,
      origem,
      instrucoes,
      ingredientes,
      favorito,
    });

    return res.status(201).json({
      sucesso: true,
      mensagem: 'Receita cadastrada com sucesso',
      dados: receita,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const mensagens = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Erro de validação',
        erros: mensagens,
      });
    }

    console.error('Erro ao criar receita:', error.message);
    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro interno ao cadastrar receita',
    });
  }
};

// @desc    Atualizar uma receita
// @route   PUT /api/receitas/:id
exports.atualizarReceita = async (req, res) => {
  try {
    const { nome, categoria, origem, instrucoes, ingredientes, favorito } = req.body;

    const receita = await Receita.findByIdAndUpdate(
      req.params.id,
      { nome, categoria, origem, instrucoes, ingredientes, favorito },
      { new: true, runValidators: true }
    );

    if (!receita) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Receita não encontrada',
      });
    }

    return res.status(200).json({
      sucesso: true,
      mensagem: 'Receita atualizada com sucesso',
      dados: receita,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const mensagens = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({
        sucesso: false,
        mensagem: 'Erro de validação',
        erros: mensagens,
      });
    }

    console.error('Erro ao atualizar receita:', error.message);
    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro interno ao atualizar receita',
    });
  }
};

// @desc    Excluir uma receita
// @route   DELETE /api/receitas/:id
exports.excluirReceita = async (req, res) => {
  try {
    const receita = await Receita.findByIdAndDelete(req.params.id);

    if (!receita) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Receita não encontrada',
      });
    }

    return res.status(200).json({
      sucesso: true,
      mensagem: 'Receita excluída com sucesso',
    });
  } catch (error) {
    console.error('Erro ao excluir receita:', error.message);
    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro interno ao excluir receita',
    });
  }
};
