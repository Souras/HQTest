import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, doc, docData, deleteDoc, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IToken } from './models/common.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) {

  }

  getList(): Observable<IToken[]> {
    const coll = collection(this.firestore, 'tokenList');
    return collectionData(coll, { idField: 'id' }) as Observable<IToken[]>;
  }

  getNodeByID(id: string): Observable<IToken> {
    const node = doc(this.firestore, `tokenList/${id}`);
    return docData(node, { idField: 'id' }) as Observable<IToken>;
  }

  addNode(token: IToken) {
    const coll = collection(this.firestore, `tokenList`);
    return addDoc(coll, token);
  }

  deleteNode(token: IToken) {
    const node = doc(this.firestore, `tokenList/${token.id}`);
    return deleteDoc(node);
  }
}
