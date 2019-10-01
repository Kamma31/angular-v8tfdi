import { Component, OnInit } from "@angular/core";
import { Grid } from "../grid.type";
import { GridService } from "../grid.service";
import { ConfigService } from "../config.service";
import { CELL } from "../cell.state";
import { GameService } from "../game.service";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.css"]
})
export class GridComponent implements OnInit {
  grid: Grid;

  constructor(
    private gridService: GridService,
    public config: ConfigService,
    public game: GameService
  ) {
    this.gridService.grid$.subscribe(grid => {
      this.grid = grid;
    });
  }

  ngOnInit() {}

  getColor(cell: CELL) {
    return cell === CELL.DEAD ? "white" : cell === CELL.NEW ? "pink" : "red";
  }

  addCell(i: number, j: number) {
    this.game.addCell(i, j);
  }

  changeCell(i: number, j: number) {
    if (this.grid[i][j] !== CELL.DEAD) {
      this.game.removeCell(i, j);
    } else {
      this.game.addCell(i,j);
    }
  }
}
