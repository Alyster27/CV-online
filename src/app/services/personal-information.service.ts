import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { IPersonnel } from '../shared/modal/personnel';

@Injectable({
  providedIn: 'root'
})
export class PersonalInformationService {
  private _urlBase: string = 'ng-cv'
  private _sub: Subscription

  constructor(private _afs: AngularFirestore) {}

  getAllPersonalInformation(){
    return this._afs.collection<IPersonnel>(this._urlBase, ref => ref.orderBy('firstname', 'asc'))
  }
}
