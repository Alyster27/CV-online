import { Component } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ModalPage } from '../modal/modal.page';
import { WorksService } from '../services/works.service';
import { IWorks } from '../shared/modal/works';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public title: string = "Expériences Professionnelles"
  public works: IWorks[] = []
  public imgUrl: string

  private _trainingCollection: AngularFirestoreCollection<IWorks>
  private _sub: Subscription

  constructor(
    private _trainingService: WorksService,
    public modalController: ModalController
  ) {}

  async ngOnInit() {
    this._trainingCollection = await this._trainingService.getAllWorks()

    this._sub = this._trainingCollection.valueChanges({ idField: 'id'}).subscribe(data => {
      this.works = data

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