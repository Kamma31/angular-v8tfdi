import { Component } from '@angular/core';
import { GameService } from './game.service';
import { GridService } from './grid.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: []
})
export class AppComponent {
  title = '...';
  showConfig = false;

  constructor(public game: GameService, private grid: GridService) {}

  play() {
    this.game.start();
  }

  stop() {
    this.game.stop();
  }

  reset() {
    this.stop();
    this.grid.reset();
  }

  random() {
    this.grid.randomize();
  }

  toggleConfig() {
    this.showConfig = !this.showConfig;
  }
}
