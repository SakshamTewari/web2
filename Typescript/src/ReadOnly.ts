/*
    const a = [1,2,3]
    const a[0] = 4     //ALLOWED

    a = [2,4,5]   // NOT ALLOWED
 

    If we do not want user to even update the element inside array or object
    we use 'readonly'

    Common usecase: When in a config file, we do not want someone to change the 'apiKey'
*/

type UserReadOnly = {
  readonly name: string;
  readonly age: number;
};

const user: UserReadOnly = {
  name: 'Saksham',
  age: 27,
};

// user.age = 28    NOT ALLOWED NOW

// If we do not want to write 'readonly' again and again for each object element

const user2: Readonly<UserReadOnly> = {
  name: 'Tewari',
  age: 28,
};
