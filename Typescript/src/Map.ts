type Animal = {
  name: string;
  age: number;
};

const animalsMap = new Map<string, Animal>(); //key : string , value : Animal type

animalsMap.set('1', { name: 'Labrador', age: 10 });
