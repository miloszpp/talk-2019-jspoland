import * as R from "ramda";

// R.prop("name")({ name: "123" })

const getName = R.prop("name");
const mapToNames = R.map(getName);

const persons = [{ name: "John", age: 22 }, { name: "Jane", age: 33 }];
const names = mapToNames(persons);
