const express = require("express"); // importamos o Express
const book = require("../models/book"); // importamos o modelo book
const router = express.Router(); // criamos o roteador

// *** CRIAÇÃO (POST) ***
router.post("/", async (req, res) => {
  const { title, author, year } = req.body; // Extraimos os dados da requisição
  try {
    const newBook = new book({ title, author, year }); // criamos e salvamos o livro
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar o livro", error }); // retornamos
  }
});

// *** Leitura (GET) ***
router.get("/", async (req, res) => {
  try {
    const books = await book.find(); // Buscamos os livros
    res.status(200).json(books); // retornamos a lista de livros
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar livros", error }); // retornamos erro, se houver
  }
});

// *** Atualização (PUT) ***
router.put("/:id", async (req, res) => {
  const { title, author, year } = req.body; // extraimos os novos dados
  try {
    const updatedBook = await book.findByIdAndUpdate(
      req.params.id,
      { title, author, year },
      { new: true }
    ); // atualizamos o livro pelo ID
    res.status(200).json(updatedBook); // retornamos o livro atualizado
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar", error }); // retornamos erro, se houver
  }
});

// *** EXCLUSÃO (DELETE) ***
router.delete("/:ID", async (req, res) => {
  try {
    await book.findByIdAndDelete(req.params.id); // deletamos o livro pela id
    res.status(200).json({ message: "Livro deletado com sucesso" }); // retornamos mensagem de sucesso
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar o livro", error }); // retornamos o erro, se houver
  }
});

// exportamos o roteador para ser usado no server.js
module.exports = router;
