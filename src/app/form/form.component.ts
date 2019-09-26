import { Component, OnInit } from '@angular/core';
import { Grid } from '../grid.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  grid: Grid;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.grid = new Grid();
  }

  ralentir(){
    this.grid.vitesse -= 10;
    this.appService.grid.next(this.grid);
  }

  accelerer(){
    this.grid.vitesse += 10;
    this.appService.grid.next(this.grid)
  }

  update(){
    this.appService.grid.next(this.grid);
  }
}
