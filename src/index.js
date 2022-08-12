import { ajax } from 'rxjs';
import { map } from 'rxjs/operators';


ajax('https://pokeapi.co/api/v2/pokemon/ditto')
  .subscribe(console.log)