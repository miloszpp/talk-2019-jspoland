const y = "a";
let x = "a";

export const person = {
  name: "John",
  age: 44
};

let customers = [
  { kind: "individual", ssn: 1234567 },
  { kind: "individual", ssn: 34535 },
  { kind: "institution", taxId: 8901 }
];

for (const customer of customers) {
  if (customer.kind === "individual") {
    console.log(customer.ssn * 10);
  }
}

const product = {
  name: "Charger",
  categories: ["electronics", "small items"]
};

product.categories.push("abc");
