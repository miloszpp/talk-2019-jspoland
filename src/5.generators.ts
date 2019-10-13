function* numbers() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

for (let i of numbers()) {
  console.log(i);
}

function* stuff() {
  yield 1;
  yield "abc";
}

function* foo() {
  const value: string = yield 42;
  console.log(`Received: ${value.toUpperCase()}`);
  return true;
}
foo().next(123);
