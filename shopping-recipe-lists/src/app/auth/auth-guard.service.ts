import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store'
import * as fromApp from '../store/app.reducer';
import * as fromAuth from './store/auth.reducer';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<fromApp.AppState>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth')
      .take(1)
      .map((authState: fromAuth.State) => {
      return authState.authenticated;
    });
  }


}
