const express = require('express');
const cors = require('cors');
const { createTodo, updateTodo } = require('./validation');
const { todo } = require('./db');
const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173', //if we want to restrict which frontend can hit our backend.
  }),
);
app.use(express.json());

// GET todos
app.get('/todos', async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

// POST todos
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
    completed: false,
  });

  res.json({
    msg: 'Todo Created!!!',
  });
});

// PUT todos
app.put('/completed', async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: 'You sent the wrong inputs',
    });
    return;
  }
  // await todo.find({
  //   title: updatePayload.title,
  //   description: updatePayload.description,
  // });

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    },
  );

  res.json({
    msg: 'Todo marked as completed',
  });
});

app.listen(3000, () => {
  console.log('Running');
});
