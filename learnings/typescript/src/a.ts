//using : types while defining the data type
const x: number = 1;
console.log(x);
//Write a TypeScript function named greet that takes a user's first name as an argument and logs a greeting message to the console.
function greet(firstName: string): void {
  console.log(firstName);
}
greet("faraz alam");
//Write a TypeScript function named sum that takes two numbers as arguments and returns their sum. Additionally, invoke the function with an example.
function sum(a: number, b: number): number {
  return a + b;
}
console.log(sum(2, 3));
// Write a TypeScript function named isLegal that takes an age as a parameter and returns true if the user is 18 or older, and false otherwise. Also, invoke the function with an example.
function isLegal(age: number): boolean {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}
console.log(isLegal(22));
// Interface
interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}
const user: User = {
  firstName: "faraz",
  lastName: "alam",
  email: "farazalam2017@gmail.com",
  age: 24,
};
//types
type stringOrNumber = string | number;
function printId(id: stringOrNumber) {
  console.log(id);
}
printId(1);
printId("202");
type Employee = {
  name: string;
  startDate: Date;
};
type Manager = {
  name: string;
  department: string;
};
type TeamLead = Employee & Manager;
const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software Developer",
};
//Arrays
function maxValue(arr: number[]) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxValue([1, 2, 3]));
//Enum
enum Direction {
  up,
  down,
  left,
  right,
}
function doSomething(keyPressed: Direction) {
  //do something
}
doSomething(Direction.down);
doSomething(Direction.up);
enum ResponseStatus {
  Success = 200,
  NotFound = 404,
  Error = 500,
}
/*
app.get("/', (req, res) => {
    if (!req.query.userId) {
			res.status(ResponseStatus.Error).json({})
    }
    // and so on...
		res.status(ResponseStatus.Success).json({});
}) 
*/
// pick
interface User1 {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}
type UserProfile = Pick<User1, "name" | "email">;
const displayProfile = (user: UserProfile) => {
  console.log(`${user.name}, ${user.email}`);
};
//partial
interface User2 {
  id: string;
  name: string;
  age: string;
  email: string;
  password: string;
}
type updateProps = Pick<User2, "name" | "age" | "email">;
type updatePropsOptional = Partial<updateProps>; //name, age, email are optional
function updateProfile(updatedProps: updatePropsOptional) {
  // do some work
}
updateProfile({ name: "faraz" });
updateProfile({}); //this also accepted
//readonly
interface Config {
  endPoint: string;
  apiKey: string;
}
const config: Readonly<Config> = {
  endPoint: "......",
  apiKey: "......",
};
config.apiKey = "..."//failed attempt
//record 


