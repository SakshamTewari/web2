// Very similar to interfaces but types cannot implement a class
// they can be used in UNIONS , INTERSECTIONS

// (Union) function to print 'id' of user which can be a number or a string
type greetArg = number | string;

function Greet(id: greetArg) {
  console.log(id);
}

// (Intersection)

type Developer = {
  name: string;
  startDate: Date;
};

interface Manager {
  name: string;
  department: string;
}

type TeamLead = Developer & Manager;

const teamLead: TeamLead = {
  name: 'Saksham',
  startDate: new Date(),
  department: 'Typescript dev',
};
