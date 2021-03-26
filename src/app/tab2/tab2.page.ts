import { Component } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ModalPage } from '../modal/modal.page';
import { TrainingsService } from '../services/trainings.service';
import { ITrainings } from '../shared/modal/trainings';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public title: string = "Études et Formations"
  public trainings: ITrainings[] = []
  public imgUrl: string

  private _trainingCollection: AngularFirestoreCollection<ITrainings>
  private _sub: Subscription

  constructor(
    private _trainingService: TrainingsService,
    public modalController: ModalController
  ) {}

  async ngOnInit() {
    this._trainingCollection = await this._trainingService.getAllTrainings()

    this._sub = this._trainingCollection.valueChanges({ idField: 'id'}).subscribe(data => {
      this.trainings = data

      this._sub.unsubscribe()
    })
  }

  async presentModal(img: string, title: string) {

    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'imgUrl': img,
        'imgTitle': title
      }
    });
    return await modal.present();
  }

}
