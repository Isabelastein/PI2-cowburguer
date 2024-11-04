// testConnection.js
const pool = require('./config');

(async () => {
    try {
        const client = await pool.connect();
        console.log('Conexão com o banco de dados realizada com sucesso!');
        client.release();
    } catch (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    }
})();
