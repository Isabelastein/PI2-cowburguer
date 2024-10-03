// config.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',      // Substitua pelo seu nome de usuário do PostgreSQL
  host: 'localhost',       // Ou o endereço do seu servidor PostgreSQL
  database: 'hamburgueria',   // Nome do seu banco de dados
  password: 'isa',   // Substitua pela sua senha do PostgreSQL
  port: 5432,              // Porta padrão do PostgreSQL
});

module.exports = pool;
