import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.page.html',
  styleUrls: ['./films-list.page.scss'],
})
export class FilmsListPage implements OnInit {

  films =  [{
    id: 1,
    title: 'titre 1',
    img: '/assets/img/olivier.jpeg',
    param1: 'param 1',
    param2: 'param 2'
  }, {
    id: 2,
    title: 'titre 2',
    img: '/assets/img/olivier.jpeg',
    param1: 'param 1',
    param2: 'param 2'
  }, {
    id: 3,
    title: 'titre 3',
    img: '/assets/img/olivier.jpeg',
    param1: 'param 1',
    param2: 'param 2'
  }, {
    id: 4,
    title: 'titre 4',
    img: '/assets/img/olivier.jpeg',
    param1: 'param 1',
    param2: 'param 2'
  }];

  constructor() { }

  ngOnInit() {
  }

}
