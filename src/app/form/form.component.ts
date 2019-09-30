import { Component, OnInit } from "@angular/core";
import { Grid } from "../grid.model";
import { AppService } from "../app.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  grid: Grid;
  longueur: number = 25;
  largeur: number = 25;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.grid = new Grid(25,25);
  }

  ralentir() {
    this.grid.vitesse -= 10;
    this.appService.grid.next(this.grid);
  }

  accelerer() {
    this.grid.vitesse += 10;
    this.appService.grid.next(this.grid);
  }

  update() {
    this.appService.grid.next(new Grid(this.longueur, this.largeur));
    this.grid = new Grid(this.longueur, this.largeur);
  }

  setRandom() {
    for (let row = 0; row < this.grid.longueur; row++) {
      for (var column = 0; column < this.grid.largeur; column++) {
        this.grid.state[row][column] = Math.round(Math.random());
      }
    }
    this.appService.grid.next(this.grid);
  }
}
