import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Grid } from './grid.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  grid = new Subject<Grid>();
  grid$ = this.grid.asObservable();

  constructor() { }
}
