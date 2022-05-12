import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-with-arrow',
  templateUrl: './header-with-arrow.component.html',
  styleUrls: ['./header-with-arrow.component.scss'],
})
export class HeaderWithArrowComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {}

}
