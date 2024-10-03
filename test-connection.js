const pool = require('./config');

async function testConnection() {
  try {
    const client = await pool.connect();
    console.log('Conexão bem-sucedida!');
    client.release();
  } catch (err) {
    console.error('Erro na conexão:', err.stack);
  }
}

testConnection();
