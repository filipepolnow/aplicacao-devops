const express = require('express');
const path = require('path'); // Módulo para lidar com caminhos de arquivos

const app = express();
const PORT = process.env.PORT || 3000; // Porta em que o servidor irá ouvir

const integrantes = {
    'integrantes': [
        {'nome': 'José Gabriel'},
        {'nome': 'Filipe Polnow'},
        {'nome': 'Vinícius Guimarães'}
    ]
};

// Define o diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint para servir a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'));
});

// Endpoint para servir a página de integrantes
app.get('/integrantes', (req, res) => {
    res.json(integrantes);
    })

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
