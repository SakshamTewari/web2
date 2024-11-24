/*
    Just like 'Pick' where the arguments are not 'optional',
    Partial allows user to pass values as needed
*/

interface User {
  id: number;
  name: string;
  age: number;
  password: string;
}

type PartialUpdateProps = Pick<User, 'name' | 'age' | 'password'>;

type UpdatePropsOptional = Partial<PartialUpdateProps>;

function updateUser(updateProps: UpdatePropsOptional) {
  // can only pass 1 or more from PartialUpdateProps
}
