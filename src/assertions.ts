export const ensureDefined = <T>(value: T | undefined | null): T => {
  if (value === undefined || value === null) {
    throw new Error("Value not defined or null");
  }
  return value;
};

function foo(bar: string | undefined) {
  const baz = ensureDefined(bar);
  return baz.toUpperCase();
}

function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
  if (val === undefined || val === null) {
      throw new Error(
          `Expected 'val' to be defined, but received ${val}`
      );
  }
}

function foo2(bar: string | undefined) {
  assertIsDefined(bar);
  return bar.toUpperCase();
}
