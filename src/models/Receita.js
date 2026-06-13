const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: [true, 'O título é obrigatório'],
      trim: true,
      maxlength: [200, 'O título pode ter no máximo 200 caracteres'],
    },
    autor: {
      type: String,
      required: [true, 'O autor é obrigatório'],
      trim: true,
      maxlength: [150, 'O nome do autor pode ter no máximo 150 caracteres'],
    },
    genero: {
      type: String,
      required: [true, 'O gênero é obrigatório'],
      trim: true,
      enum: {
        values: [
          'Ficção',
          'Não-Ficção',
          'Romance',
          'Terror',
          'Fantasia',
          'Ficção Científica',
          'Biografia',
          'História',
          'Autoajuda',
          'Técnico',
          'Infantil',
          'Outro',
        ],
        message: '{VALUE} não é um gênero válido',
      },
    },
    anoPublicacao: {
      type: Number,
      required: [true, 'O ano de publicação é obrigatório'],
      min: [1000, 'Ano de publicação inválido'],
      max: [new Date().getFullYear(), 'O ano não pode ser no futuro'],
    },
    lido: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model('Livro', livroSchema);
