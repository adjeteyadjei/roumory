import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { GameCenterComponent } from './game-center/game-center.component';
import { isString } from 'underscore';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public modalCtrl: ModalController,
    private router: Router) { }

  async start() {
    const modal = await this.modalCtrl.create({
      component: GameCenterComponent,
    });

    await modal.present();
    const { data: center } = await modal.onWillDismiss();

    if (isString(center)) {
      this.router.navigate(["/tabs/tab1/game-board", center]);
    };
  }

}
