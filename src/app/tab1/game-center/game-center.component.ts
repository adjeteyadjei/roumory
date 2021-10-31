import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-game-center',
  templateUrl: './game-center.component.html',
  styleUrls: ['./game-center.component.scss'],
})
export class GameCenterComponent implements OnInit {
  searchText: string;
  gameCenters: string[] = ['Dragon Casino', 'Super Bass Casino', 'GB Way Casino'];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    //Todo: Fetch the game center
  }

  dismiss(res: any) { this.modalCtrl.dismiss(res); }

  create(name: string) {
    //Todo: Create a new game center
  }

  selectGameCenter(name: string) {
    //Todo: Store active game center
    this.dismiss(name);
  }

}
