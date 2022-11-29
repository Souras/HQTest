import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, doc, docData, deleteDoc, addDoc, getFirestore, query, orderBy, limit, getDoc, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IToken } from './models/common.interface';
// import { DataSnapshot, Database, DatabaseInstances, DatabaseModule } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // db = null;
  constructor(private firestore: Firestore) {
    // this.db = DataSnapshot;

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

  getTokenByCity() {
    const coll = collection(this.firestore, 'tokenList');
    const q = query(coll, where('city', '==', 'Panjab'));
    collectionData(q).subscribe(data => {
      console.log(data);
    });
  }
}
// guide doc - https://firebase.google.com/docs/firestore/query-data/order-limit-data
