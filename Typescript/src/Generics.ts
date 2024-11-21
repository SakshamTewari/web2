function identity<T>(arg: T) {
  return arg;
}

let output1 = identity<string>('Saksham');
let output2 = identity<number>(1);

function firstEl<T>(arr: T[]) {
  return arr[0];
}

let el1 = firstEl(['Saksham', 'Tewari']); //el1 is now string
let el2 = firstEl<number>([1, 2]); //el2 is number

// But if we do not give generic type
function something(arr: (number | string)[]) {
  return arr[0];
}

let s1 = something(['Saksham', 1]);
// console.log(s1.toUpperCase()); // will throw an error as .toUpperCase() is not for numbers
