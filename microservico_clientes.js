import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8080; 


let clientes = [];

app.use(cors());
app.use(express.json());

// Rota para obter todos os clientes
app.get('/clientes', (req, res) => {
    res.json(clientes);
});

// Rota para adicionar um cliente
app.post('/clientes', (req, res) => {
    const cliente = req.body;

    
    if (!cliente.nome || !cliente.email || !cliente.telemovel) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
    }

    // Adiciona o cliente à lista
    clientes.push(cliente);
    res.status(201).json({ message: 'Cliente adicionado com sucesso!', cliente });
});


// Inicializa o servidor
app.listen(PORT, () => {
    console.log(`Microserviço de Gestão de Clientes rodando na porta ${PORT} 🚀`);
});
