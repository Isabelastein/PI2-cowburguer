const express = require('express');
const path = require('path');
const pool = require('./config'); // Importa a configuração do banco de dados

const app = express();
const port = 3000;

// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para interpretar o corpo das requisições em formato JSON
app.use(express.json()); // Adiciona essa linha para que possamos receber dados JSON

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

// Rota para adicionar um novo visitante
app.post('/api/visitantes', async (req, res) => {
    const { nome } = req.body; // Captura apenas o nome
    console.log('Nome recebido:', nome); // Log do nome recebido
    try {
        // Verifica se o visitante já está registrado
        const checkQuery = 'SELECT * FROM visitantes WHERE nome = $1';
        const checkResult = await pool.query(checkQuery, [nome]);

        if (checkResult.rows.length > 0) {
            // Visitante já existe
            console.log('Visitante já registrado:', nome);
            res.status(200).json({ message: 'Visitante já registrado', visitor: checkResult.rows[0] });
        } else {
            // Se não existe, insere o novo visitante
            const result = await pool.query(
                'INSERT INTO visitantes (nome) VALUES ($1) RETURNING *',
                [nome]
            );
            console.log('Registro inserido:', result.rows[0]); // Log do registro inserido
            res.status(201).json(result.rows[0]); // Retorna o registro inserido
        }
    } catch (err) {
        console.error('Erro ao adicionar visitante:', err);
        res.status(500).send('Erro ao adicionar visitante ao banco de dados');
    }
});

// Inicializa o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
