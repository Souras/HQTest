import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DataService } from '../data-service.service';
import { IToken } from '../models/common.interface'

interface Item {
  name: string
};

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  name: string = '';
  city: string = '';
  items: any;
  public folder!: string;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) {

  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;

    this.items = this.dataService.getList();
    this.dataService.getTokenByCity();
  }
  addUser() {
    const token: IToken = {
      name: this.name,
      city: this.city
    }
    this.dataService.addNode(token)
  }
  deleteNode(item: IToken) {
    this.dataService.deleteNode(item);
  }

}
