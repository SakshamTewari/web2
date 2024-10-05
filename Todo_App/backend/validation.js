const zod = require('zod');
/*
For POST
    {
        title: string,
        description: string
    }
For GET
    {

    }

For PUT
    {
        id: string
    }
*/

const createTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const updateTodo = zod.object({
  id: zod.string(),
});

// This syntax works in CommonJS but Vite uses ES modules.
// module.exports = {
//   createTodo: createTodo,
//   updateTodo: updateTodo,
// };

module.exports = { createTodo, updateTodo };
