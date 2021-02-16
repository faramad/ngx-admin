import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from '../firebase.service';

import * as _ from 'lodash';

@Injectable({providedIn: 'root'})
export class AuthService {

  roles: Array<string>;

  constructor(
    private auth: AngularFireAuth,
    private firebase: FirebaseService,
  ) {}

  getRoles = () => {
    return new Observable<Array<string> | null>(obs => {
      this.auth.user.subscribe(user => {
        if(user) {
          this.roles ? obs.next(this.roles)
          : this.firebase.get(`users/${user?.uid}/roles`, value => {
            this.roles = _.includes(value, ',') ? _.split(value, ',') : [value];
            obs.next(this.roles);
          });
        }

        else obs.next(null);
      });

      return {
        unsubscribe() {}
      };
    })
  }
}
