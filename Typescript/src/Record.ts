/*
    Record is a cleaner syntax to represent an object in typescript
*/

type UserType = Record<string, number>;

const users1: UserType = {
  '1': 24,
  abc: 2389,
  'ras@': 32,
};
