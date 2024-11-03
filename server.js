// server.js
const express = require('express');
const path = require('path');
const pool = require('./config'); // Importa a configuração do banco de dados

const app = express();
const port = 3000;

// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página de entrada
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'entrada.html'));
});

// Rota para a página do cardápio
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Exemplo de rota para buscar dados do banco
app.get('/api/hamburgueres', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM hamburgueres'); // Ajuste a consulta conforme sua tabela
        res.json(result.rows);
    } catch (err) {
        console.error('Erro na consulta:', err);
        res.status(500).send('Erro na consulta ao banco de dados');
    }
});

// Inicializa o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});