import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { Grid } from "../grid.model";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.css"],
  styles:[]
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
}
