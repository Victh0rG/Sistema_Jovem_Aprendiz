const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const pool = require('../../../config/db.js'); // Seu arquivo de conexão com o pool

// Rota para cadastrar um ESTAGIÁRIO
router.post('/cadastro/estagiario', async (req, res) => {
    const { nome, email, password } = req.body;

    // Validação básica
    if (!nome || !email || !password) {
        return res.status(400).json({ erro: 'Nome, email e senha são obrigatórios' });
    }

    if (password.length < 6) {
        return res.status(400).json({ erro: 'A senha deve ter pelo menos 6 caracteres' });
    }

    try {
        // Gerar hash da senha
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds);

        // Inserir no banco
        const sql = `
            INSERT INTO ESTAGIARIOS (nome, email, password_hash)
            VALUES (?, ?, ?)
        `;

        const [result] = await pool.execute(sql, [nome, email, passwordHash]);

        res.status(201).json({
            mensagem: 'Estagiário cadastrado com sucesso!',
            userId: result.insertId
        });

    } catch (err) {
        console.error('Erro ao cadastrar estagiário:', err);

        if (err.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ erro: 'Este email já está cadastrado' });
        }

        res.status(500).json({ erro: 'Erro interno no servidor' });
    }
});

// Rota para cadastrar um JOVEM APRENDIZ (quase igual)
router.post('/cadastro/jovem-aprendiz', async (req, res) => {
    const { nome, email, password } = req.body;

    if (!nome || !email || !password) {
        return res.status(400).json({ erro: 'Nome, email e senha são obrigatórios' });
    }

    if (password.length < 6) {
        return res.status(400).json({ erro: 'A senha deve ter pelo menos 6 caracteres' });
    }

    try {
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds);

        const sql = `
            INSERT INTO JOVEM_APRENDIZ (nome, email, password_hash)
            VALUES (?, ?, ?)
        `;

        const [result] = await pool.execute(sql, [nome, email, passwordHash]);

        res.status(201).json({
            mensagem: 'Jovem Aprendiz cadastrado com sucesso!',
            userId: result.insertId
        });

    } catch (err) {
        console.error('Erro ao cadastrar jovem aprendiz:', err);

        if (err.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ erro: 'Este email já está cadastrado' });
        }

        res.status(500).json({ erro: 'Erro interno no servidor' });
    }
});

module.exports = router;