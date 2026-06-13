const mongoose = require('mongoose');

const receitaSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: [true, 'O nome da receita é obrigatório'],
      trim: true,
      maxlength: [200, 'O nome pode ter no máximo 200 caracteres'],
    },
    categoria: {
      type: String,
      required: [true, 'A categoria é obrigatória'],
      trim: true,
      enum: {
        values: [
          'Sobremesa',
          'Prato Principal',
          'Entrada',
          'Bebida',
          'Vegetariano',
          'Vegano',
          'Outro',
        ],
        message: '{VALUE} não é uma categoria válida',
      },
    },
    origem: {
      type: String,
      trim: true,
      maxlength: [100, 'A origem pode ter no máximo 100 caracteres'],
    },
    ingredientes: {
      type: [String],
      required: [true, 'Os ingredientes são obrigatórios'],
    },
    instrucoes: {
      type: String,
      required: [true, 'As instruções são obrigatórias'],
      trim: true,
    },
    favorito: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model('Receita', receitaSchema);
