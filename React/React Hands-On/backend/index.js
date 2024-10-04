import express from 'express';
import { createTodo, updateTodo } from './validation';
const app = express();

app.use(express.json());

app.get('/todos', (req, res) => {});

app.post('/todo', (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: 'You sent the wrong inputs',
    });
    return;
  }
  // put it in mongoDB
});

app.put('/completed', (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: 'You sent the wrong inputs',
    });
    return;
  }
  // put it in mongoDB
});
