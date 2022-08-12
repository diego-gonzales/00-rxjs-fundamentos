import { of, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

const letters$ = of('A', 'B', 'C', 'D', 'E').pipe(
  map(letter => {
    if (letter === 'D') {
      x = 10;
    }
    return letter;
  }),
  retry(3),
  catchError(err => throwError(() => new Error(err)))
  // catchError(err => of(err))
);

letters$.subscribe({
  next: letter => console.log(letter),
  error: err => console.log(err)
});