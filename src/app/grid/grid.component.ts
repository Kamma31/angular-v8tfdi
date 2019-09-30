import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { Grid } from "../grid.model";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.css"]
})
export class GridComponent implements OnInit {
  grid: Grid = new Grid();

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.grid$.subscribe(res => {
      this.grid = res;
    });
  }

  longueur(n: number){    
    return Array(n).fill(0);
  }

  largeur(n: number){
    return Array(n).fill(0);
  }

  getBgColor(i: number, j: number): string{
    return this.grid.state[i][j] == 1 ? "black":"";
  }

  changeColor(i: number, j: number){
    this.grid.state[i][j] = (this.grid.state[i][j]+1)%2;
  }
}
