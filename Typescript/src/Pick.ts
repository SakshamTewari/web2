interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
}

/*
If we want to 'pick' specific properties of interface and pass it to a function, we use 'Pick'
This helps if there are a lot of properties we want to pick and pass to a function
This helps in not creating another interface and passing it as a prop
*/

// allow user to update only name, age and password
type UpdateProps = Pick<User, 'name' | 'age' | 'password'>;

function updateUser(updatedProps: UpdateProps) {
  // hit the database to update the user
}
