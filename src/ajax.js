import { throwError, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs';

// const myRequest$ = ajax('https://pokeapi.co/api/v2/pokemon/ditto');
// const myRequest$ = ajax.getJSON('https://pokeapi.co/api/v2/pokemon/dit').pipe(
//   catchError(err => throwError(err)),
//   // catchError(err => of(err))
// )

// myRequest$.subscribe({
//   next: data => console.log(data),
//   error: err => console.log(err.status)
// });


const myRequest2$ = ajax({
  url: 'https://httpbin.org/delay/5',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: {
    name: 'Este es un body de prueba',
  }
}).pipe(
  catchError(err => of(err)),
);

myRequest2$.subscribe({
  next: data => console.log(data),
  error: err => console.log(err)
});