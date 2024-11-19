// max number from an array of positive integers
function maxNumber(arr: number[]) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

//Given a list of users, filter out the users that are legal (> 18 yrs)
interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function filterUsers(users: User[]) {
  return users.filter((user) => user.age > 18);
}
