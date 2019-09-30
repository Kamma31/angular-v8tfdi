import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CELL } from './cell.state';
import { ConfigService } from './config.service';
import { Grid } from './grid.type';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  private grid: Grid = [];
  private gridSubject = new BehaviorSubject<Grid>([]);

  grid$ = this.gridSubject.asObservable();

  constructor(private config: ConfigService) {
    this.reset();
  }

  reset() {
    this.grid = [];
    for (let i = 0; i < this.config.longueur; i++) {
      const row = [];
      for (let j = 0; j < this.config.largeur; j++) {
        row[j] = CELL.DEAD;
      }
      this.grid[i] = row;
    }
    this.update();
  }

  update() {
    this.gridSubject.next(this.grid);
  }

  randomize() {
    for (let row = 0; row < this.config.longueur; row++) {
      for (let column = 0; column < this.config.largeur; column++) {
        this.grid[row][column] = Math.round(Math.random());
      }
    }
    this.update();
  }
}
