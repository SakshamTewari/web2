type UserObject = {
  name: string;
  age: number;
};

type Users = {
  [key: string]: UserObject;
};

const users: Users = {
  '1': {
    name: 'Saksham',
    age: 27,
  },
  '2': {
    name: 'Tewari',
    age: 28,
  },
};
