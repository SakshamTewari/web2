import express from 'express';
import { createTodo, updateTodo } from './validation';
import todo from './db';
const app = express();

app.use(express.json());

app.get('/todos', (req, res) => {});

app.post('/todo', async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: 'You sent the wrong inputs',
    });
    return;
  }
  // put it in mongoDB
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
  });

  res.json({
    msg: 'Todo Created!!!',
  });
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
