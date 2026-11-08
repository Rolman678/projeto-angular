import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivate {
  constructor(
    private _router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('token') !== null) {
        return true;
      }
    }

    this._router.navigate(['login']);
    return false;
  }
}
