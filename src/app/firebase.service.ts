import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/database';

import * as _ from 'lodash';

@Injectable({providedIn: 'root'})
export class FirebaseService {

  constructor(private realtime: AngularFireDatabase) {}

  get(path: string, callback) {
    return this.realtime.database.ref(path).once('value', snap => callback(snap.val()));
  }
}
