import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Item {
  name: string
};

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  item$: Observable<any[]>;
  public folder!: string;

  constructor(private activatedRoute: ActivatedRoute, firestore: Firestore) {
    const collection2 = collection(firestore, 'tokenList');
    this.item$ = collectionData(collection2);
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
