import { catchError, mergeMap, of, takeUntil, throwError, timer } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

const url = 'https://httpbin.org/delay/4';

const myRequest$ = fromFetch(url).pipe(
  mergeMap(res => res.json()),
  // This allow us abort a request (ít's a simulation).
  // If after 5 seconds the request is not completed, we abort it.
  // We can use also an 'unscribe()' to abort a request.
  takeUntil(timer(5000)),
);

myRequest$.subscribe(console.log);