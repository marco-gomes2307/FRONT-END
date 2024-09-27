const mongoose = require( 'mongoose');

// Definindo o esquema do livro
const BookSchema = mongoose.Schema ({
title: { type: String, required: true },
author: { type: String, requird: true },
year: { type: Number },
});

// Exportando o modelo
module.exports = mongoose.model('Book',  BookSchema);