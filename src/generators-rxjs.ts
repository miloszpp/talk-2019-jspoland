import { Observable, of } from "rxjs";
import { flatMap, map } from "rxjs/operators";

export const observableAsync = <T>(
  gen: Generator<Observable<T>, T, T | undefined>
) => {
  function step(value?: T): Observable<T> {
    const result = gen.next(value);
    if (result.done === true) {
      return of(result.value);
    } else {
      return result.value.pipe(flatMap(step));
    }
  }
  return step();
};

declare const fetchNumber: () => Observable<number>;

fetchNumber().pipe(
  flatMap((x: number) => fetchNumber().pipe(map((y: number) => x + y)))
);

observableAsync(
  (function*() {
    const x: number = yield fetchNumber();
    const y: number = yield fetchNumber();
    return x + y;
  })()
).subscribe(console.log);

// monads
