import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'stg-newsletters',
  templateUrl: './newsletters.component.html',
  styleUrls: ['./newsletters.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewslettersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
