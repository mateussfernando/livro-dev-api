// Importa o módulo Express
const express = require('express'); //commonJS

// Importa o pacote CORS para permitir requisições entre origens diferentes
// const cors = require("cors");
const cors = require('cors');

// Cria uma instância do aplicativo Express
const app = express();

// Define a porta do servidor. Se não houver uma variável de ambiente PORT, usa a porta 3000.
const port = process.env.PORT || 3000;

// Habilita o CORS para todas as origens, permitindo que outras origens acessem a API
app.use(cors());

//Habilita o CORS somente para a minha aplicação
// app.use(
//   cors({
//     origin: "https://livrodev.netlify.app",
//   })
// );

// Define o endpoint GET para a raiz ('/') da aplicação
app.get("/api", function (req, res) {
  // Retorna uma resposta JSON com duas categorias de livros
  res.json({
    maisVendidos: [
      // Lista de livros mais vendidos
      {
        title: "JavaScript: O Guia Definitivo", // 
        category: "Lógica & Programação", 
        rating: 5, 
        image: "https://m.media-amazon.com/images/I/91z1xY4ppaL._SY425_.jpg",
      },
      {
        title: "Limpeza de Código: A Arte de Produzir Programas Legíveis", 
        category: "Desenvolvimento de Software", 
        rating: 5, 
        image: "https://m.media-amazon.com/images/I/71lkViuJFML._SL1408_.jpg",
      },
      {
        title: "Programador Pragmático", // 
        category: "Desenvolvimento de Software", 
        rating: 5, 
        image: "https://m.media-amazon.com/images/I/61hewOW+8zL._SY425_.jpg",
      },
      {
        title: "Estruturas de Dados e Algoritmos em Java", // 
        category: "Algoritmos & Estruturas de Dados", 
        rating: 5, 
        image: "https://m.media-amazon.com/images/I/91YgfEma0CL._SL1500_.jpg",
      },
      {
        title:
          "JavaScript e jQuery: Desenvolvimento de Interfaces Web Interativas", // 
        category: "JavaScript", 
        rating: 5, 
        image:
          "https://m.media-amazon.com/images/I/41pSmCOLxKL._SX342_SY445_.jpg",
      },
    ],
    melhoresAvaliados: [
      // Lista de livros mais bem avaliados
      {
        title: "JavaScript: O Guia Definitivo", // 
        category: "Lógica & Programação", 
        rating: 5, 
        image: "https://m.media-amazon.com/images/I/91z1xY4ppaL._SY425_.jpg",
      },
      {
        title: "Limpeza de Código: A Arte de Produzir Programas Legíveis", // 
        category: "Desenvolvimento de Software", 
        rating: 5, 
        image: "https://m.media-amazon.com/images/I/71lkViuJFML._SL1408_.jpg",
      },
      {
        title: "Programador Pragmático", // 
        category: "Desenvolvimento de Software", 
        rating: 5, 
        image: "https://m.media-amazon.com/images/I/61hewOW+8zL._SY425_.jpg",
      },
      {
        title: "Estruturas de Dados e Algoritmos em Java", // 
        category: "Algoritmos & Estruturas de Dados", 
        rating: 5, 
        image: "https://m.media-amazon.com/images/I/91YgfEma0CL._SL1500_.jpg",
      },
      {
        title:
          "JavaScript e jQuery: Desenvolvimento de Interfaces Web Interativas", 
        category: "JavaScript", 
        rating: 5, 
        image:
          "https://m.media-amazon.com/images/I/41pSmCOLxKL._SX342_SY445_.jpg",
      },
    ],
  });
});

// Inicia o servidor na porta definida e exibe uma mensagem de sucesso
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`); // Mensagem no console indicando que o servidor foi iniciado
});
