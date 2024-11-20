// Enums allows us to define a set of 'named' constant

type KeyInput = 'up' | 'down' | 'right' | 'left';

// If no type is given to each enum values, then 0,1.. will be saved
enum Direction {
  Up, //0
  Down, //1
  Right, //2
  Left, //3
}

//OR
enum Direction1 {
  Up = 11, //11
  Down, //12
  Right, //13
  Left, //14
}

//OR

enum Direction2 {
  Up = 11, //11
  Down = 20, //20
  Right, //21
  Left, //22
}

// giving type values to each enum
enum Poles {
  North = 'north',
  South = 'south',
  East = 'east',
  West = 'west',
}

// Usually used in routes where we return some status codes
enum ResponseStatus {
  NotFound = 404,
  Error = 500,
  Success = 200,
}
// console.log(Direction.Down);
