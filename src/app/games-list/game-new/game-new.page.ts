import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Game } from 'src/app/models/game.model';
import {GameService} from "../../game.service";


@Component({
  selector: 'app-game-new',
  templateUrl: './game-new.page.html',
  styleUrls: ['./game-new.page.scss'],
})
export class GameNewPage implements OnInit {
  public game!: Game;

  constructor(
    private Game: GameService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.game = new Game();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau Jeux enregistré',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/tabs/games']);
      }, 2000);
    });
  }


  add() {
    this.Game.saveNewGame(this.game).subscribe(() => {
      this.game = new Game();
      this.presentToast();
    })
  }

}
