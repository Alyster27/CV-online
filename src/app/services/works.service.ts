import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IWorks } from '../shared/modal/works';

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  private _urlBase: string = 'ng-works'

  constructor(
    private _afs: AngularFirestore
  ) { }

  getAllWorks(){
    return this._afs.collection<IWorks>(this._urlBase, ref => ref.orderBy('order','desc'))
  }

  getPngById(id: string){
    return this._afs.doc<IWorks>(`${this._urlBase}/${id}`)
  }
}
