import { Component } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { IPersonnel } from 'src/app/shared/modal/personnel'
import { PersonalInformationService } from '../services/personal-information.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public personalInformation: IPersonnel[] = []
  public presentation1 = []
  public title : string = "Présentation"

  private _personalCollection: AngularFirestoreCollection<IPersonnel>
  private _sub: Subscription

  constructor(
    private _personalInfoService: PersonalInformationService
  ) {}

  async ngOnInit() {
    this._personalCollection = await this._personalInfoService.getAllPersonalInformation()

    this._sub = this._personalCollection.valueChanges({ idField: 'id'}).subscribe(data => {
      
      this.personalInformation = data

      for (const iterator of this.personalInformation) {
        this.presentation1 = iterator.presentation1.split(".")
      }

      this._sub.unsubscribe()
    })
  }

}
