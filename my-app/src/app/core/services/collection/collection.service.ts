import { Injectable } from '@angular/core';
import { Item } from '../../../shared/models/item.model';
import { COLLECTION } from '../collection';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
// import { HttpClient } from '@angular/common/http';

@Injectable()
export class CollectionService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  private _collection$: Observable<Item[]>;
  // private _collection$: Subject<Item[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('collection');
    this._collection$ = this.itemsCollection.valueChanges();
  }

  // get collection
  get collection$(): Observable<Item[]> {
    return this._collection$;
  }

  // set collection
  set collection$(collection: Observable<Item[]>) {
    this._collection$ = collection;
  }

  // add item
  addItem(item: Item): void {
    item.id = this.afs.createId();
    this.itemsCollection.doc(item.id).set(item)
    .catch(error => console.log(error));
  }
  // update item
  update(item: Item): void {
    this.itemsCollection.doc(item.id).update(item)
    .catch(error => console.log(error));
  }

  // delete item
  delete(item: Item): void {
    this.itemsCollection.doc(item.id).delete()
    .catch(error => console.log(error));
  }

  // get item
  getItem(id: String): Observable<Item> {
    const item = this.afs.doc<Item>(`collection/${id}`).valueChanges();
    return item;
  }

  // get id in the url by router
  // then get date by getItem
  // send the data to formComponent

}
