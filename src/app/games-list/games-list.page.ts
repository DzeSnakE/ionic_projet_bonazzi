import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.page.html',
  styleUrls: ['./games-list.page.scss'],
})
export class GamesListPage implements OnInit {
  games!: any;
  constructor(
    private Game: GameService
  ) { }

  ngOnInit(): void {
    this.Game.getAllGames().subscribe((data:any)=>{
      this.games = data;
    })
  }

}
