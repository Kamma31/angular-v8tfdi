import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  styles:[]
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
