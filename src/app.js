const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Define o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para servir a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Dados dos integrantes do grupo
const data = {
  'integrantes': [
    { 'nome': 'Filipe Polnow de Souza' },
    { 'nome': 'Jose Berton' },
    { 'nome': 'Vinicius Guimaraes de Oliveira' }
  ]
};

// Endpoint para retornar os integrantes
app.get('/integrantes', (req, res) => {
  res.json(data);
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
