import { Injectable } from '@angular/core';
import { GridService } from './grid.service';
import { CELL } from './cell.state';
import { Grid } from './grid.type';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  grid: Grid;

  generation = 0;
  population = 0;
  play = false;

  constructor(private gridService: GridService, private config: ConfigService) {
    this.gridService.grid$.subscribe(grid => {
      this.stop();
      this.grid = grid;
    });
  }

  start() {
    this.play = true;
    this.next();
  }

  stop() {
    this.play = false;
  }

  next() {
    this.generation++;

    const clone = this.grid.map(row => row.map(cell => cell));

    for (let y = 0; y < this.config.longueur; y++) {
      for (let x = 0; x < this.config.largeur; x++) {
        const x0 = x === 0 ? this.config.largeur - 1 : x - 1;
        const x2 = x === this.config.largeur - 1 ? 0 : x + 1;
        const y0 = y === 0 ? this.config.longueur - 1 : y - 1;
        const y2 = y === this.config.longueur - 1 ? 0 : y + 1;

        let count = 0;
        clone[y0][x0] !== CELL.DEAD ? count++ : 0;
        clone[y][x0] !== CELL.DEAD ? count++ : 0;
        clone[y2][x0] !== CELL.DEAD ? count++ : 0;
        clone[y0][x] !== CELL.DEAD ? count++ : 0;
        clone[y2][x] !== CELL.DEAD ? count++ : 0;
        clone[y0][x2] !== CELL.DEAD ? count++ : 0;
        clone[y][x2] !== CELL.DEAD ? count++ : 0;
        clone[y2][x2] !== CELL.DEAD ? count++ : 0;

        if (count === 3) {
          if (this.grid[y][x] !== CELL.DEAD) {
            this.grid[y][x] = CELL.OLD;
          } else {
            this.grid[y][x] = CELL.NEW;
            this.population++;
          }
        } else if (count === 2 && this.grid[y][x] !== CELL.DEAD) {
          this.grid[y][x] = CELL.OLD;
        } else {
          this.grid[y][x] !== CELL.DEAD ? this.population-- : null;
          this.grid[y][x] = CELL.DEAD;
        }
      }
    }

    if (this.play && this.population !== 0) {
      setTimeout(() => this.next(), this.config.vitesse);
    }
  }

  addCell(i: number, j: number) {
    if (this.grid[i][j] !== CELL.NEW) {
      this.grid[i][j] = CELL.NEW;
      this.population++;
    }
  }
}
