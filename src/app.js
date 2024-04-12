const express = require('express');
const path = require('path'); // Módulo para lidar com caminhos de arquivos

const app = express();
const PORT = process.env.PORT || 3000; // Porta em que o servidor irá ouvir

// Define o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para servir a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
