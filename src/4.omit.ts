interface Person {
  name: string;
  age: number;
}

type AgelessPerson = Omit<Person, "age">;
