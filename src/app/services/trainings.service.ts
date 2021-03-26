import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ITrainings } from '../shared/modal/trainings';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {
  private _urlBase: string = 'ng-trainings'

  constructor(
    private _afs: AngularFirestore
  ) { }

  getAllTrainings(){
    return this._afs.collection<ITrainings>(this._urlBase, ref => ref.orderBy('order', 'desc'))
  }

  getPngById(id: string){
    return this._afs.doc<ITrainings>(`${this._urlBase}/${id}`)
  }
}
