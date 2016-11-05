import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

export class UserDetailGuard implements CanActivate {
    canActivate(nextRoute: ActivatedRouteSnapshot, currentRouteState: RouterStateSnapshot): Observable<boolean> | boolean {
        return confirm('Are you sure to load UserDetail Component?');
    }
}