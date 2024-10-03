import express from 'express';
const app = express();

app.use(express.json());

app.get('/todos', (req, res) => {});

app.post('/todo', (req, res) => {});

app.put('/completed', (req, res) => {});
