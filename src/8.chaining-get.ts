// This is a type safe implementation of `get` util. Please use it instead of `get` from `lodash`.
// Please see tests for usage examples.

type N<T> = NonNullable<T>;

// NonNullable + property access
// NP<T, P> is used instead of N<T>[P] as the latter triggers the following error:
// "Type instantiation is excessively deep and possibly infinite" in TypeScript 3.5.
// By collapsing NonNullable with property access we reduce type depth.
type NP<T, P extends string | number | symbol> =
  // Is T a regular object?
  T extends { [p in P]?: infer V }
    ? T[P]
    : P extends number // If not, is T an array? In such a case P must be numerical.
    ? T extends unknown[]
      ? T[P]
      : never
    : never;

export function get<T, P1 extends keyof N<T>>(
  obj: T,
  props: [P1]
): NP<T, P1> | undefined;

export function get<T, P1 extends keyof N<T>, D>(
  obj: T,
  props: [P1],
  defaultValue: D
): N<NP<T, P1>> | D;

export function get<T, P1 extends keyof N<T>, P2 extends keyof N<NP<T, P1>>>(
  obj: T,
  props: [P1, P2]
): NP<NP<T, P1>, P2> | undefined;

export function get<T, P1 extends keyof N<T>, P2 extends keyof N<NP<T, P1>>, D>(
  obj: T,
  props: [P1, P2],
  defaultValue: D
): N<NP<NP<T, P1>, P2>> | D;

export function get<
  T,
  P1 extends keyof N<T>,
  P2 extends keyof N<NP<T, P1>>,
  P3 extends keyof N<NP<NP<T, P1>, P2>>
>(obj: T, props: [P1, P2, P3]): NP<NP<NP<T, P1>, P2>, P3> | undefined;

export function get<
  T,
  P1 extends keyof N<T>,
  P2 extends keyof N<NP<T, P1>>,
  P3 extends keyof N<NP<NP<T, P1>, P2>>,
  D
>(
  obj: T,
  props: [P1, P2, P3],
  defaultValue: D
): N<NP<NP<NP<T, P1>, P2>, P3>> | D;

export function get<
  T,
  P1 extends keyof N<T>,
  P2 extends keyof N<NP<T, P1>>,
  P3 extends keyof N<NP<NP<T, P1>, P2>>,
  P4 extends keyof N<NP<NP<NP<T, P1>, P2>, P3>>
>(
  obj: T,
  props: [P1, P2, P3, P4]
): NP<NP<NP<NP<T, P1>, P2>, P3>, P4> | undefined;

export function get<
  T,
  P1 extends keyof N<T>,
  P2 extends keyof N<NP<T, P1>>,
  P3 extends keyof N<NP<NP<T, P1>, P2>>,
  P4 extends keyof N<NP<NP<NP<T, P1>, P2>, P3>>,
  D
>(
  obj: T,
  props: [P1, P2, P3, P4],
  defaultValue: D
): N<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>> | D;

export function get<
  T,
  P1 extends keyof N<T>,
  P2 extends keyof N<NP<T, P1>>,
  P3 extends keyof N<NP<NP<T, P1>, P2>>,
  P4 extends keyof N<NP<NP<NP<T, P1>, P2>, P3>>,
  P5 extends keyof N<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>>
>(
  obj: T,
  prop1: [P1, P2, P3, P4, P5]
): NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5> | undefined;

export function get<
  T,
  P1 extends keyof N<T>,
  P2 extends keyof N<NP<T, P1>>,
  P3 extends keyof N<NP<NP<T, P1>, P2>>,
  P4 extends keyof N<NP<NP<NP<T, P1>, P2>, P3>>,
  P5 extends keyof N<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>>,
  D
>(
  obj: T,
  prop1: [P1, P2, P3, P4, P5],
  defaultValue: D
): N<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>> | D;

export function get<
  T,
  P1 extends keyof N<T>,
  P2 extends keyof N<NP<T, P1>>,
  P3 extends keyof N<NP<NP<T, P1>, P2>>,
  P4 extends keyof N<NP<NP<NP<T, P1>, P2>, P3>>,
  P5 extends keyof N<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>>,
  P6 extends keyof N<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>>
>(
  obj: T,
  props: [P1, P2, P3, P4, P5, P6]
): NP<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>, P6> | undefined;

export function get<
  T,
  P1 extends keyof N<T>,
  P2 extends keyof N<NP<T, P1>>,
  P3 extends keyof N<NP<NP<T, P1>, P2>>,
  P4 extends keyof N<NP<NP<NP<T, P1>, P2>, P3>>,
  P5 extends keyof N<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>>,
  P6 extends keyof N<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>>,
  D
>(
  obj: T,
  props: [P1, P2, P3, P4, P5, P6],
  defaultValue: D
): N<NP<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>, P6>> | D;

export function get<
  T,
  P1 extends keyof N<T>,
  P2 extends keyof N<NP<T, P1>>,
  P3 extends keyof N<NP<NP<T, P1>, P2>>,
  P4 extends keyof N<NP<NP<NP<T, P1>, P2>, P3>>,
  P5 extends keyof N<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>>,
  P6 extends keyof N<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>>,
  P7 extends keyof N<NP<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>, P6>>
>(
  obj: T,
  props: [P1, P2, P3, P4, P5, P6, P7]
): NP<NP<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>, P6>, P7> | undefined;

export function get<
  T,
  P1 extends keyof N<T>,
  P2 extends keyof N<NP<T, P1>>,
  P3 extends keyof N<NP<NP<T, P1>, P2>>,
  P4 extends keyof N<NP<NP<NP<T, P1>, P2>, P3>>,
  P5 extends keyof N<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>>,
  P6 extends keyof N<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>>,
  P7 extends keyof N<NP<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>, P6>>,
  D
>(
  obj: T,
  props: [P1, P2, P3, P4, P5, P6, P7],
  defaultValue: D
): N<NP<NP<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>, P6>, P7>> | D;

export function get<
  T,
  P1 extends keyof N<T>,
  P2 extends keyof N<NP<T, P1>>,
  P3 extends keyof N<NP<NP<T, P1>, P2>>,
  P4 extends keyof N<NP<NP<NP<T, P1>, P2>, P3>>,
  P5 extends keyof N<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>>,
  P6 extends keyof N<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>>,
  P7 extends keyof N<NP<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>, P6>>,
  P8 extends keyof N<NP<NP<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>, P6>, P7>>
>(
  obj: T,
  props: [P1, P2, P3, P4, P5, P6, P7, P8]
):
  | NP<NP<NP<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>, P6>, P7>, P8>
  | undefined;

export function get<
  T,
  P1 extends keyof N<T>,
  P2 extends keyof N<NP<T, P1>>,
  P3 extends keyof N<NP<NP<T, P1>, P2>>,
  P4 extends keyof N<NP<NP<NP<T, P1>, P2>, P3>>,
  P5 extends keyof N<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>>,
  P6 extends keyof N<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>>,
  P7 extends keyof N<NP<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>, P6>>,
  P8 extends keyof N<NP<NP<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>, P6>, P7>>,
  D
>(
  obj: T,
  props: [P1, P2, P3, P4, P5, P6, P7, P8],
  defaultValue: D
): N<NP<NP<NP<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>, P6>, P7>, P8>> | D;

export function get<
  T,
  P1 extends keyof N<T>,
  P2 extends keyof N<NP<T, P1>>,
  P3 extends keyof N<NP<NP<T, P1>, P2>>,
  P4 extends keyof N<NP<NP<NP<T, P1>, P2>, P3>>,
  P5 extends keyof N<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>>,
  P6 extends keyof N<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>>,
  P7 extends keyof N<NP<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>, P6>>,
  P8 extends keyof N<NP<NP<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>, P6>, P7>>,
  P9 extends keyof N<
    NP<NP<NP<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>, P6>, P7>, P8>
  >
>(
  obj: T,
  props: [P1, P2, P3, P4, P5, P6, P7, P8, P9]
):
  | NP<NP<NP<NP<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>, P6>, P7>, P8>, P9>
  | undefined;

export function get<
  T,
  P1 extends keyof N<T>,
  P2 extends keyof N<NP<T, P1>>,
  P3 extends keyof N<NP<NP<T, P1>, P2>>,
  P4 extends keyof N<NP<NP<NP<T, P1>, P2>, P3>>,
  P5 extends keyof N<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>>,
  P6 extends keyof N<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>>,
  P7 extends keyof N<NP<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>, P6>>,
  P8 extends keyof N<NP<NP<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>, P6>, P7>>,
  P9 extends keyof N<
    NP<NP<NP<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>, P6>, P7>, P8>
  >,
  D
>(
  obj: T,
  props: [P1, P2, P3, P4, P5, P6, P7, P8, P9],
  defaultValue: D
):
  | N<NP<NP<NP<NP<NP<NP<NP<NP<NP<T, P1>, P2>, P3>, P4>, P5>, P6>, P7>, P8>, P9>>
  | D;

export function get(
  obj: unknown,
  props: string[],
  defaultValue?: unknown
): unknown {
  const value =
    obj &&
    typeof obj === "object" &&
    props.reduce<unknown>(
      (result, prop) =>
        result === null || result === undefined
          ? undefined
          : (result as { [key: string]: unknown })[prop],
      obj
    );
  return value === undefined ? defaultValue : value;
}
