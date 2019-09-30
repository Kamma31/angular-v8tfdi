import { Component, OnInit } from '@angular/core';
import { GridService } from '../grid.service';
import { ConfigService } from '../config.service';
import { GameService } from '../game.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor(public config: ConfigService, private grid: GridService, private game: GameService) {}

  ngOnInit() {}

  ralentir() {
    this.config.setVitesse(this.config.vitesse * 1.1);
  }

  accelerer() {
    this.config.setVitesse(this.config.vitesse * 0.9);
  }

  update() {
    this.grid.reset();
  }

  setRandom() {
    this.grid.randomize();
  }

  start() {
    this.game.start();
  }

  stop() {
    this.game.stop();
  }
}
