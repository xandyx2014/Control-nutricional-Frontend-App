import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return from(this.authService.userAuth()).pipe(
      map( value => {
        console.log(value);
        if (value) {
          return true;
        }
        this.router.navigate(['/welcome']);
        return false;
      })
    );
  }
}
