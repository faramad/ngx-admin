import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NbAuthService } from '@nebular/auth';
import { AuthService } from './auth.service';

import { MENU_ITEMS } from '../app-menu';
import * as _ from 'lodash';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private nbAuthService: NbAuthService,
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.nbAuthService.isAuthenticatedOrRefresh().pipe(
      tap(isAuth => { if(!isAuth) this.router.navigate(['auth/login']) })
    )
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state)
  }
}

@Injectable()
export class RoleGuard implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return new Observable<boolean>(obs => {
      this.authService.getRoles().subscribe(roles => {
        let access = _.find(MENU_ITEMS, ['link', state.url.match(/^\/[a-z0-9]+/)[0]]).roles;
        let granted = !access || _.size(_.intersection(access, roles)) != 0;
        obs.next(granted)
        if(!granted) this.router.navigate(['/']);
      });
    });
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state)
  }
}
