/* 
    When using zod, we're doing runtime validation

    TYPE INFERENCE
    --------------

    const StringZodSchema = z.string();    //runtime validation
    type StringZodType = z.infer<typeof StringZodSchema>  // compile time validation //string
*/

import { z } from 'zod';
import express from 'express';

const app = express();

// Define the schema for profile update

const userProfileSchema = z.object({
  name: z.string().min(1, { message: 'Name cannot be empty' }),
  email: z.string().email({ message: 'Invalid email format' }),
  age: z
    .number()
    .min(18, { message: 'You must be atleast 18 years old' })
    .optional(),
});
type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.put('/user', (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: FinalUserSchema = req.body; //what  is the type? hint: z.infer

  if (!success) {
    res.status(411).json({});
    return;
  }

  // update database here
  res.json({
    message: 'User updated',
  });
});
