import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() imgUrl: string;
  @Input() imgTitle: string;

  constructor(public modalCtrl: ModalController) {}  
  
  async ngOnInit() {
    await console.log(this.imgUrl)
    await console.log(this.imgTitle)
  }

  dismiss() {  
    this.modalCtrl.dismiss();  
  }  

}
